'use client';

import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames/bind';

import useClickOutside from '/business/hooks/useClickOutside';

import Select from '../select/Select';
import Option, { BasicOption } from '../option/Option';

import style from './Dropdown.module.scss';

const cx = classNames.bind(style);

type ExtendedOption = BasicOption & { [key: string]: unknown };

interface BaseProps {
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
  trigger: ReactNode;
  optionComponent?: FunctionComponent<{
    option: BasicOption | ExtendedOption;
  }>;
  optionList?: ExtendedOption[];
  duration?: number;
  effect?: 'rolling' | 'fade';
  rotateTrigger?: boolean;
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

const Dropdown = ({
  className,
  header,
  footer,
  trigger,
  optionComponent = Option,
  optionList,
  effect = 'rolling',
  duration = 300,
  height,
  rotateTrigger = false,
}: DropdownProps) => {
  const pathname = usePathname();

  const dropdownWrapperRef = useRef<HTMLElement>(null);

  const isActive = useRef(false);

  const [isTriggered, setIsTriggered] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

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
        <div className={cx('dropdown-body')}>
          <Select>
            {(optionList || []).map((option) =>
              React.createElement(optionComponent, {
                key: option.value,
                option,
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
