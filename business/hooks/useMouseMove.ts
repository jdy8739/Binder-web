import { useCallback, useEffect, useRef, useState } from 'react';

import { VALUE_CONST } from '../const';

type MouseEvent = React.MouseEvent<HTMLDivElement>;

interface TriggeredCoord {
  xLeft: boolean;
  xRight: boolean;
  yUp: boolean;
  yDown: boolean;
}

const useMouseMove = ({
  threshold = 30,
  handleOnXLeftMove,
  handleOnXRightMove,
  handleOnYUpMove,
  handleOnYDownMove,
}: {
  threshold?: number;
  handleOnXLeftMove?: () => void;
  handleOnXRightMove?: () => void;
  handleOnYUpMove?: () => void;
  handleOnYDownMove?: () => void;
}) => {
  const clientCoordRef = useRef<{ clientX: number; clientY: number }>({
    clientX: VALUE_CONST.NUMBER.ZERO,
    clientY: VALUE_CONST.NUMBER.ZERO,
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
          let Moved: TriggeredCoord = current;

          if (Math.abs(xMoved) >= threshold) {
            if (Math.sign(xMoved) === 1) Moved = { ...Moved, xRight: true };
            else if (Math.sign(xMoved) === -1)
              Moved = { ...Moved, xLeft: true };
          }
          if (Math.abs(yMoved) >= threshold) {
            if (Math.sign(yMoved) === 1) Moved = { ...Moved, yDown: true };
            else if (Math.sign(yMoved) === -1) Moved = { ...Moved, yUp: true };
          }

          return Object.keys(current).some((key) => current[key] !== Moved[key])
            ? Moved
            : current;
        });
      }
    },
    [isMouseDown, threshold],
  );

  const handleOnMouseEventEnd = useCallback(() => {
    clientCoordRef.current = {
      clientX: VALUE_CONST.NUMBER.ZERO,
      clientY: VALUE_CONST.NUMBER.ZERO,
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
    if (triggeredCoord.xLeft) handleOnXLeftMove?.();
    if (triggeredCoord.xRight) handleOnXRightMove?.();
    if (triggeredCoord.yUp) handleOnYUpMove?.();
    if (triggeredCoord.yDown) handleOnYDownMove?.();
  }, [
    triggeredCoord,
    handleOnXLeftMove,
    handleOnXRightMove,
    handleOnYDownMove,
    handleOnYUpMove,
  ]);

  return {
    isMouseDown,
    handleOnMouseDown,
    handleOnMouseMove,
    handleOnMouseEventEnd,
  };
};

export default useMouseMove;
