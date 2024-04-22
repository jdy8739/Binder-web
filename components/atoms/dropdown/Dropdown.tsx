'use client';

import {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames/bind';

import Select from '../select/Select';
import Option from '../option/Option';

import style from './Dropdown.module.scss';

const cx = classNames.bind(style);

interface DropdownProps {
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
  trigger: ReactNode;
  optionList: {
    value: number | string;
    content: number | string;
    subContent?: number | string;
  }[];
  animationDuration?: number;
}

const Dropdown = ({
  className,
  header,
  footer,
  trigger,
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
        className={cx('select', {
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
              {optionList.map((option) => (
                <Option key={option.value}>
                  <div>
                    <span>{option.content}</span>
                    <span>{option.subContent}</span>
                  </div>
                </Option>
              ))}
            </Select>
          </div>
          {footer && <div className={cx('footer')}>{footer}</div>}
        </div>
      </div>
    </section>
  );
};

export default Dropdown;
