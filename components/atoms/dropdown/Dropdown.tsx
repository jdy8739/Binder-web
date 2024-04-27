'use client';

import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames/bind';

import useClickOutside from '/business/hooks/useClickOutside';

import Select from '../select/Select';
import Option, { BasicOption } from '../option/Option';

import style from './Dropdown.module.scss';

const cx = classNames.bind(style);

type ExtendedOption = BasicOption & { [key: string]: unknown };

interface DropdownProps {
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
  trigger: ReactNode;
  optionComponent?: FunctionComponent<{
    option: BasicOption | ExtendedOption;
  }>;
  optionList?: ExtendedOption[];
  duration?: number;
  height: number;
}

const Dropdown = ({
  className,
  header,
  footer,
  trigger,
  optionComponent = Option,
  optionList,
  duration = 300,
  height,
}: DropdownProps) => {
  const dropdownWrapperRef = useRef<HTMLElement>(null);

  const [isTriggered, setIsTriggered] = useState(false);

  useClickOutside({
    ref: dropdownWrapperRef.current,
    callback: () => setIsTriggered(false),
  });

  return (
    <section ref={dropdownWrapperRef} className={cx('wrapper', className)}>
      <div className={cx('dropdown-trigger')}>
        <button type="button" onClick={() => setIsTriggered(!isTriggered)}>
          {trigger}
        </button>
      </div>
      <div
        className={cx('dropdown-content', 'dropdown-dropdown', {
          triggered: isTriggered,
        })}
        style={
          {
            '--duration': `${duration}ms`,
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
