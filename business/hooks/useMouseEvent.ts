import { useCallback, useEffect, useRef, useState } from 'react';

import { CONST } from '../const';

type MouseEvent = React.MouseEvent<HTMLDivElement>;

interface TriggeredCoord {
  xLeft: boolean;
  xRight: boolean;
  yUp: boolean;
  yDown: boolean;
}

type OnChange = () => void;

const useMouseEvent = ({
  moveBenchmark = 30,
  handleOnXLeftChange,
  handleOnXRightChange,
  handleOnYUpChange,
  handleOnYDownChange,
}: {
  moveBenchmark?: number;
  handleOnXLeftChange?: OnChange;
  handleOnXRightChange?: OnChange;
  handleOnYUpChange?: OnChange;
  handleOnYDownChange?: OnChange;
}) => {
  const clientCoordRef = useRef<{ clientX: number; clientY: number }>({
    clientX: CONST.NUMBER.ZERO,
    clientY: CONST.NUMBER.ZERO,
  });

  const [isMouseDown, setIsMouseDown] = useState(false);

  const [triggeredCoord, setTriggeredCoord] = useState<TriggeredCoord>({
    xLeft: false,
    xRight: false,
    yUp: false,
    yDown: false,
  });

  const handleOnMouseDown = useCallback(({ clientX, clientY }: MouseEvent) => {
    clientCoordRef.current = { clientX, clientY };
    setIsMouseDown(true);
  }, []);

  const handleOnMouseMove = useCallback(
    ({ clientX: curClientX, clientY: curClientY }: MouseEvent) => {
      if (isMouseDown) {
        const {
          current: { clientX, clientY },
        } = clientCoordRef;
        const xMoved = curClientX - clientX;
        const yMoved = curClientY - clientY;

        setTriggeredCoord((current) => {
          let changed: TriggeredCoord = current;

          if (Math.abs(xMoved) >= moveBenchmark) {
            if (Math.sign(xMoved) === 1) changed = { ...changed, xRight: true };
            else if (Math.sign(xMoved) === -1)
              changed = { ...changed, xLeft: true };
          }
          if (Math.abs(yMoved) >= moveBenchmark) {
            if (Math.sign(yMoved) === 1) changed = { ...changed, yDown: true };
            else if (Math.sign(yMoved) === -1)
              changed = { ...changed, yUp: true };
          }

          return Object.keys(current).some(
            (key) => current[key] !== changed[key],
          )
            ? changed
            : current;
        });
      }
    },
    [isMouseDown, moveBenchmark],
  );

  const handleOnMouseEventEnd = useCallback(() => {
    clientCoordRef.current = {
      clientX: CONST.NUMBER.ZERO,
      clientY: CONST.NUMBER.ZERO,
    };
    setTriggeredCoord((current) => {
      return Object.values(current).some((val) => val)
        ? {
            xLeft: false,
            xRight: false,
            yUp: false,
            yDown: false,
          }
        : current;
    });
    setIsMouseDown(false);
  }, []);

  useEffect(() => {
    if (triggeredCoord.xLeft) handleOnXLeftChange?.();
    if (triggeredCoord.xRight) handleOnXRightChange?.();
    if (triggeredCoord.yUp) handleOnYUpChange?.();
    if (triggeredCoord.yDown) handleOnYDownChange?.();
  }, [
    triggeredCoord,
    handleOnXLeftChange,
    handleOnXRightChange,
    handleOnYDownChange,
    handleOnYUpChange,
  ]);

  return {
    isMouseDown,
    handleOnMouseDown,
    handleOnMouseMove,
    handleOnMouseEventEnd,
  };
};

export default useMouseEvent;
