'use client';

import React, {
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

import style from './Slide.module.scss';

const cx = classNames.bind(style);

interface Props {
  className?: string;
  elementList: ReactElement[];
  startIndex?: number;
  numberToShow?: number;
  gap?: number;
  transitionDuration?: number;
}

type SlidingWay = 'left' | 'right';

const Slide = ({
  className,
  elementList,
  startIndex = CONST.NUMBER.ZERO,
  numberToShow = 4,
  gap = 10,
  transitionDuration = 600,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [eachElWidth, setEachElWidth] = useState<number>(CONST.NUMBER.ZERO);

  const [firstIndex, setFirstIndex] = useState(startIndex);

  const [{ way, isTransitioning }, setIsTransitioning] = useState<{
    way: SlidingWay;
    isTransitioning: boolean;
  }>({ way: 'left', isTransitioning: false });

  const validElList = useMemo(() => {
    if (!Array.isArray(elementList)) return [];
    return elementList.filter((el) => React.isValidElement(el));
  }, [elementList]);

  const slicedElementList = useMemo(() => {
    const lastIndex = firstIndex + numberToShow + CONST.NUMBER.ONE;

    const { length } = validElList;

    if (firstIndex === CONST.NUMBER.ZERO) {
      return [
        validElList[length - CONST.NUMBER.ONE],
        ...validElList.slice(firstIndex, lastIndex),
      ];
    }
    if (lastIndex >= validElList.length) {
      const overflowed = lastIndex - length;
      return [
        ...validElList.slice(firstIndex - CONST.NUMBER.ONE, lastIndex),
        ...validElList.slice(CONST.NUMBER.ZERO, overflowed),
      ];
    }
    return validElList.slice(firstIndex - CONST.NUMBER.ONE, lastIndex);
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
    (way: SlidingWay) => {
      if (!isTransitioning) {
        setIsTransitioning((current) => {
          if (!current.isTransitioning) return { way, isTransitioning: true };
          return current;
        });

        setTimeout(() => {
          setIsTransitioning({ way, isTransitioning: false });
          setFirstIndex((current) => {
            const isWayLeft = way === 'left';
            const nextIndex = isWayLeft
              ? current - CONST.NUMBER.ONE
              : current + CONST.NUMBER.ONE;
            if (isWayLeft) {
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

  useLayoutEffect(() => {
    updateElementWidth();

    window.addEventListener('resize', updateElementWidth);

    return () => window.removeEventListener('resize', updateElementWidth);
  }, [updateElementWidth]);

  return (
    <div ref={wrapperRef} className={cx('wrapper', className)}>
      <div className={cx('navigator')}>
        <button type="button" onClick={() => handleOnNavClick('left')}>
          left
        </button>
        <button type="button" onClick={() => handleOnNavClick('right')}>
          right
        </button>
      </div>
      <div className={cx('slide')}>
        {eachElWidth === CONST.NUMBER.ZERO ? (
          <div />
        ) : (
          <div
            className={cx('slide-elements')}
            style={{
              width: `${eachElWidth * slicedElementList.length}px`,
              gap: `${gap}px`,
              top: CONST.STRING.ZERO,
              left: `-${eachElWidth}px`,
              transform: isTransitioning
                ? `translateX(${way === 'left' ? CONST.STRING.BLANK : '-'}${eachElWidth}px)`
                : CONST.STRING.BLANK,
              transitionDuration: isTransitioning
                ? `${transitionDuration}ms`
                : CONST.STRING.BLANK,
            }}
          >
            {slicedElementList.map((el, idx) => (
              <div key={idx} style={{ width: `${eachElWidth}px` }}>
                {el}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;
