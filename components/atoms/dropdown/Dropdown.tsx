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
import { wait } from '/business/helper/utils';

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

  const [status, setStatus] = useState<
    'triggered' | 'triggered-done' | 'leave' | 'leave-done'
  >('leave-done');

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

  const switchStatus = useCallback(
    async (status: 'triggered' | 'leave') => {
      setStatus(status);

      await wait(duration);

      setStatus(`${status}-done`);
    },
    [duration],
  );

  const handleOnChange = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (onChange) {
        const target = e.target as TargetElement;

        const optionValue = findOptionValueRecursive(target);

        if (optionValue !== value) {
          onChange(optionValue);
          switchStatus('leave');
        }
      }
    },
    [value, onChange, findOptionValueRecursive, switchStatus],
  );

  const handleOnTriggerClick = useCallback(async () => {
    if (status === 'triggered' || status === 'leave') {
      return;
    }

    if (status === 'leave-done') {
      switchStatus('triggered');
    } else {
      switchStatus('leave');
    }
  }, [status, switchStatus]);

  useClickOutside({
    ref: dropdownWrapperRef.current,
    callback: async () => {
      if (status === 'triggered-done') {
        switchStatus('leave');
      }
    },
  });

  useEffect(() => {
    setStatus('leave-done');
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
            triggered:
              rotateTrigger &&
              (status === 'triggered' || status === 'triggered-done'),
          })}
          type="button"
          onClick={handleOnTriggerClick}
        >
          {trigger}
        </button>
      </div>
      <div
        className={cx('dropdown-content', 'dropdown-dropdown', effect, status)}
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
