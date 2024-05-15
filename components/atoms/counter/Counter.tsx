import classNames from 'classnames/bind';

import { useCallback, useEffect, useRef } from 'react';

import style from './Counter.module.scss';

const cx = classNames.bind(style);

type CounterProps = {
  className?: string;
  endValue: number;
  startValue?: number;
  duration?: number;
  pause?: boolean;
  iterationCount?: number;
  onPaused?: () => void;
  onResume?: () => void;
  onStart?: () => void;
  onEnd?: () => void;
  onIteration?: () => void;
  onReset?: () => void;
};

const Counter = ({
  className,
  endValue,
  startValue = 0,
  duration,
  pause = false,
  iterationCount = Infinity,
  onPaused,
  onResume,
  onStart,
  onEnd,
  onIteration,
  onReset,
}: CounterProps) => {
  const directionRef = useRef<'up' | 'down'>(
    endValue > startValue ? 'up' : 'down',
  );

  const counterElRef = useRef<HTMLSpanElement>(null);

  const currentValueRef = useRef(startValue);

  const rafRef = useRef<number | null>(null);

  const calcNextValue = useCallback(() => {
    const { current: direction } = directionRef;

    if (duration) {
      //
    }
    if (direction === 'up') currentValueRef.current += 1;
    else currentValueRef.current -= 1;

    return currentValueRef.current;
  }, [duration]);

  const renderValue = useCallback((value: number) => {
    const { current: counterEl } = counterElRef;
    if (counterEl) counterEl.innerHTML = String(value);
  }, []);

  const startCount = useCallback(() => {
    const performAnimation = () => {
      if (currentValueRef.current === endValue) return;

      renderValue(calcNextValue());

      requestAnimationFrame(performAnimation);
    };

    rafRef.current = requestAnimationFrame(performAnimation);
  }, [endValue, calcNextValue, renderValue]);

  useEffect(() => {
    startCount();
  }, [startCount]);

  return (
    <span className={cx('counter-wrapper', className)}>
      <span ref={counterElRef} className={cx('counter-value', className)}>
        {startValue}
      </span>
    </span>
  );
};

export default Counter;
