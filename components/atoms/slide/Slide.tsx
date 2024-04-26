'use client';

import React, {
  CSSProperties,
  ReactElement,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames/bind';
import throttle from 'lodash.throttle';

import { CONST } from '/business/const';

import useMouseMove from '../../../business/hooks/useMouseMove';

import { NavLeftVerticalWide, NavRightVerticalWide } from '/assets/svg';

import style from './Slide.module.scss';

const cx = classNames.bind(style);

interface Props {
  className?: string;
  elementList: ReactElement[];
  startIndex?: number;
  numberToShow?: number;
  gap?: CSSProperties['gap'];
  transitionDuration?: number;
  navLeft?: ReactElement;
  navRight?: ReactElement;
}

type SlideDirection = 'left' | 'right';

const Slide = ({
  className,
  elementList,
  startIndex = CONST.NUMBER.ZERO,
  numberToShow = 4,
  gap = '10px',
  transitionDuration = 600,
  navLeft = <NavLeftVerticalWide />,
  navRight = <NavRightVerticalWide />,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [eachElWidth, setEachElWidth] = useState<number>(CONST.NUMBER.ZERO);

  const [firstIndex, setFirstIndex] = useState(startIndex);

  const [{ direction, isTransitioning }, setIsTransitioning] = useState<{
    direction: SlideDirection;
    isTransitioning: boolean;
  }>({ direction: 'left', isTransitioning: false });

  const validElList = useMemo(() => {
    if (!Array.isArray(elementList)) return [];
    return elementList.filter((el) => React.isValidElement(el));
  }, [elementList]);

  const { isNavButtonDisabled, slicedElementList } = useMemo(() => {
    const lastIndex = firstIndex + numberToShow + CONST.NUMBER.ONE;

    const { length } = validElList;

    const isNavButtonDisabled = validElList.length <= numberToShow;

    if (firstIndex === CONST.NUMBER.ZERO) {
      return {
        isNavButtonDisabled,
        slicedElementList: [
          validElList[length - CONST.NUMBER.ONE],
          ...validElList.slice(firstIndex, lastIndex),
        ],
      };
    }
    if (lastIndex >= validElList.length) {
      const overflowed = lastIndex - length;
      return {
        isNavButtonDisabled,
        slicedElementList: [
          ...validElList.slice(firstIndex - CONST.NUMBER.ONE, lastIndex),
          ...validElList.slice(CONST.NUMBER.ZERO, overflowed),
        ],
      };
    }
    return {
      isNavButtonDisabled,
      slicedElementList: validElList.slice(
        firstIndex - CONST.NUMBER.ONE,
        lastIndex,
      ),
    };
  }, [firstIndex, validElList, numberToShow]);

  const calcEachElementWidth = useCallback(() => {
    const { current: wrapperEl } = wrapperRef;

    const { width } = wrapperEl
      ? wrapperEl.getBoundingClientRect()
      : { width: CONST.NUMBER.ZERO };

    const widthNumberValue = Math.floor(width);

    const eachElWidth = Number((widthNumberValue / numberToShow).toFixed(2));

    return eachElWidth;
  }, [numberToShow]);

  const updateElementWidth = throttle(
    useCallback(
      () => setEachElWidth(calcEachElementWidth()),
      [calcEachElementWidth],
    ),
    900,
  );

  const handleOnNavClick = useCallback(
    (direction: SlideDirection) => {
      if (!isTransitioning) {
        setIsTransitioning((current) => {
          if (!current.isTransitioning)
            return { direction, isTransitioning: true };
          return current;
        });

        setTimeout(() => {
          setIsTransitioning({ direction, isTransitioning: false });
          setFirstIndex((current) => {
            const isDirectionLeft = direction === 'left';
            const nextIndex = isDirectionLeft
              ? current - CONST.NUMBER.ONE
              : current + CONST.NUMBER.ONE;
            if (isDirectionLeft) {
              return nextIndex < CONST.NUMBER.ZERO
                ? validElList.length - CONST.NUMBER.ONE
                : nextIndex;
            }
            return nextIndex === validElList.length
              ? CONST.NUMBER.ZERO
              : nextIndex;
          });
        }, transitionDuration);
      }
    },
    [isTransitioning, validElList, transitionDuration],
  );

  const {
    isMouseDown,
    handleOnMouseDown,
    handleOnMouseMove,
    handleOnMouseEventEnd,
  } = useMouseMove({
    threshold: 30,
    handleOnXLeftMove: () => handleOnNavClick('right'),
    handleOnXRightMove: () => handleOnNavClick('left'),
  });

  useLayoutEffect(() => {
    updateElementWidth();

    window.addEventListener('resize', updateElementWidth);

    return () => window.removeEventListener('resize', updateElementWidth);
  }, [updateElementWidth]);

  return (
    <div
      ref={wrapperRef}
      className={cx('wrapper', className, { grab: isMouseDown })}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseEventEnd}
      onMouseLeave={handleOnMouseEventEnd}
      onMouseMove={handleOnMouseMove}
    >
      {eachElWidth === CONST.NUMBER.ZERO ? (
        <div />
      ) : (
        <>
          <div className={cx('slide')}>
            <div
              className={cx('slide-elements', { transition: isTransitioning })}
              style={
                {
                  '--each-el-width': `${eachElWidth}px`,
                  '--el-length': slicedElementList.length,
                  '--direction': direction === 'left' ? 1 : -1,
                  '--duration': `${transitionDuration}ms`,
                  gap,
                } as CSSProperties
              }
            >
              {slicedElementList.map((el, idx) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  className={cx('slide-elements-item')}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
          <div className={cx('navigator')}>
            <button
              type="button"
              onClick={() => handleOnNavClick('left')}
              disabled={isNavButtonDisabled}
            >
              {navLeft}
            </button>
            <button
              type="button"
              onClick={() => handleOnNavClick('right')}
              disabled={isNavButtonDisabled}
            >
              {navRight}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Slide;
