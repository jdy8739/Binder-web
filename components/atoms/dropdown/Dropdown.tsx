'use client';

import React, {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames/bind';

import Select from '../select/Select';
import Option, { BasicOption, OptionProps } from '../option/Option';

import style from './Dropdown.module.scss';

const cx = classNames.bind(style);

interface DropdownProps {
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
  trigger: ReactNode;
  optionComp: ({ className, option }: OptionProps) => JSX.Element;
  optionList: BasicOption[];
  animationDuration?: number;
}

const Dropdown = ({
  className,
  header,
  footer,
  trigger,
  optionComp = Option,
  optionList,
  animationDuration = 800,
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
      }, animationDuration);
    }

    return () => clearTimeout(timeout);
  }, [triggered, visible, animationDuration]);

  return (
    <section className={cx('wrapper', className)}>
      <div className={cx('trigger')}>
        <button type="button" onClick={handleOnToggleTrigger}>
          {trigger}
        </button>
      </div>
      <div
        className={cx('drop-down', {
          triggered,
          visible,
        })}
      >
        <div
          className={cx(triggered ? 'roll-down' : 'roll-up')}
          style={
            {
              '--duration': `${animationDuration + 100}ms`,
            } as CSSProperties
          }
        >
          {header && <div className={cx('header')}>{header}</div>}
          <div>
            <Select>
              {optionList.map((option) =>
                React.createElement(optionComp, { key: option.value, option }),
              )}
            </Select>
          </div>
          {footer && <div className={cx('footer')}>{footer}</div>}
        </div>
      </div>
    </section>
  );
};

export default Dropdown;
