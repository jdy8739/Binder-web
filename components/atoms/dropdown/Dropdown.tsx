'use client';

import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames/bind';

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
  optionComponent: FunctionComponent<{
    option: BasicOption | ExtendedOption;
  }>;
  optionList: ExtendedOption[];
  duration?: number;
}

const Dropdown = ({
  className,
  header,
  footer,
  trigger,
  optionComponent = Option,
  optionList,
  duration = 300,
}: DropdownProps) => {
  const [{ triggered, visible }, setTriggerState] = useState<{
    triggered: boolean;
    visible: boolean;
  }>({ triggered: false, visible: false });

  const handleOnToggleTrigger = useCallback(() => {
    if (!triggered && !visible)
      setTriggerState({ triggered: true, visible: true });
    if (triggered && visible) setTriggerState({ triggered: false, visible });
  }, [triggered, visible]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!triggered && visible) {
      timeout = setTimeout(() => {
        setTriggerState((current) => ({ ...current, visible: false }));
      }, duration);
    }

    return () => clearTimeout(timeout);
  }, [triggered, visible, duration]);

  return (
    <section className={cx('wrapper', className)}>
      <div className={cx('trigger')}>
        <button type="button" onClick={handleOnToggleTrigger}>
          {trigger}
        </button>
      </div>
      <div className={cx('drop-down', { triggered, visible })}>
        {header && <div className={cx('header')}>{header}</div>}
        <div>
          <Select>
            {optionList.map((option) =>
              React.createElement(optionComponent, {
                key: option.value,
                option,
              }),
            )}
          </Select>
        </div>
        {footer && <div className={cx('footer')}>{footer}</div>}
        <div
          className={cx('cover')}
          style={
            {
              '--duration': `${duration}ms`,
            } as CSSProperties
          }
        />
      </div>
    </section>
  );
};

export default Dropdown;
