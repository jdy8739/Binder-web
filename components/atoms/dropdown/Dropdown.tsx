/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';

import useClickOutside from '/business/hooks/useClickOutside';

import Select from '../select/Select';
import Option, { BasicOption } from '../option/Option';

import style from './Dropdown.module.scss';

const cx = classNames.bind(style);

type ExtendedOption = BasicOption & { [key: string]: unknown };

interface BaseProps {
  className?: string;
  value?: string;
  header?: ReactNode;
  footer?: ReactNode;
  trigger: ReactNode;
  optionComponent?: FunctionComponent<{
    option: BasicOption | ExtendedOption;
    chosen?: boolean;
  }>;
  optionList?: ExtendedOption[];
  duration?: number;
  effect?: 'rolling' | 'fade';
  rotateTrigger?: boolean;
  onChange?: (value: string) => void;
}

interface RollingProps extends BaseProps {
  effect?: 'rolling';
  height: number;
}

interface FadeProps extends BaseProps {
  effect: 'fade';
  height?: never;
}

type DropdownProps = RollingProps | FadeProps;

type TargetElement = Element & {
  dataset: { optionValue?: string };
};

const Dropdown = ({
  className,
  value,
  header,
  footer,
  trigger,
  optionComponent = Option,
  optionList,
  effect = 'rolling',
  duration = 300,
  height,
  rotateTrigger = false,
  onChange,
}: DropdownProps) => {
  const pathname = usePathname();

  const dropdownWrapperRef = useRef<HTMLElement>(null);

  const isActive = useRef(false);

  const [isTriggered, setIsTriggered] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const findOptionValueRecursive = useCallback((target: TargetElement) => {
    const { optionValue } = target.dataset;

    if (optionValue) {
      return optionValue;
    }

    const children = Array.from(target.childNodes.entries()).map(
      ([_, element]) => element,
    );

    let targetOptionValue = '';

    children.some((child) => {
      const optionValue = findOptionValueRecursive(child as TargetElement);

      targetOptionValue = optionValue;

      return optionValue;
    });

    return targetOptionValue;
  }, []);

  const handleOnChange = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (onChange) {
        const target = e.target as TargetElement;

        const optionValue = findOptionValueRecursive(target);

        if (optionValue !== value) {
          onChange(optionValue);
        }
      }
    },
    [value, onChange, findOptionValueRecursive],
  );

  useClickOutside({
    ref: dropdownWrapperRef.current,
    callback: () => setIsVisible(false),
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const beforeChange = isTriggered && !isVisible;

    const isActiveNow = isActive.current;

    if (beforeChange && isActiveNow) {
      timeout = setTimeout(() => {
        isActive.current = false;
        setIsTriggered(false);
      }, duration);
    } else if (beforeChange && !isActiveNow) {
      timeout = setTimeout(() => {
        isActive.current = true;
        setIsVisible(true);
      });
    }
    return () => clearTimeout(timeout);
  }, [isTriggered, isVisible, pathname, duration]);

  useEffect(() => {
    setIsVisible(false);
  }, [pathname]);

  return (
    <section
      ref={dropdownWrapperRef}
      className={cx('dropdown-wrapper', className)}
      style={
        {
          '--duration': `${duration}ms`,
        } as CSSProperties
      }
    >
      <div className={cx('dropdown-trigger')}>
        <button
          className={cx('trigger-button', {
            triggered: rotateTrigger && isTriggered,
          })}
          type="button"
          onClick={() =>
            !isTriggered ? setIsTriggered(true) : setIsVisible(false)
          }
        >
          {trigger}
        </button>
      </div>
      <div
        className={cx('dropdown-content', 'dropdown-dropdown', effect, {
          visible: isVisible,
          triggered: isTriggered,
        })}
        style={
          {
            '--height': `${height}px`,
          } as CSSProperties
        }
      >
        {header && <div className={cx('dropdown-header')}>{header}</div>}
        <div className={cx('dropdown-body')} onClick={handleOnChange}>
          <Select>
            {(optionList || []).map((option) =>
              React.createElement(optionComponent, {
                key: option.value,
                option,
                chosen: value === option.value,
              }),
            )}
          </Select>
        </div>
        {footer && <div className={cx('dropdown-footer')}>{footer}</div>}
      </div>
    </section>
  );
};

export default Dropdown;
