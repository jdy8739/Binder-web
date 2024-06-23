import { useCallback, useEffect, useRef, useState } from 'react';

import { VALUE_CONST } from '../const';

type MouseEvent = React.MouseEvent<HTMLDivElement>;

type DirectionMoved = {
  xLeft: boolean;
  xRight: boolean;
  yUp: boolean;
  yDown: boolean;
};

type MoveEventParams = {
  threshold?: number;
  handleOnXLeftMove?: () => void;
  handleOnXRightMove?: () => void;
  handleOnYUpMove?: () => void;
  handleOnYDownMove?: () => void;
};

const useMouseMove = ({
  threshold = 30,
  handleOnXLeftMove,
  handleOnXRightMove,
  handleOnYUpMove,
  handleOnYDownMove,
}: MoveEventParams) => {
  const clientCoordRef = useRef<{ clientX: number; clientY: number }>({
    clientX: VALUE_CONST.NUMBER.ZERO,
    clientY: VALUE_CONST.NUMBER.ZERO,
  });

  const [isMouseDown, setIsMouseDown] = useState(false);

  const [directionsMoved, setDirectionsMoved] = useState<DirectionMoved>({
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

        setDirectionsMoved((current) => {
          let moved: DirectionMoved = current;

          if (Math.abs(xMoved) >= threshold) {
            const xMovedSign = Math.sign(xMoved);

            if (xMovedSign === 1) moved = { ...moved, xRight: true };
            else if (xMovedSign === -1) moved = { ...moved, xLeft: true };
          }
          if (Math.abs(yMoved) >= threshold) {
            const yMovedSign = Math.sign(yMoved);

            if (yMovedSign === 1) moved = { ...moved, yDown: true };
            else if (yMovedSign === -1) moved = { ...moved, yUp: true };
          }

          return Object.keys(current).some((key) => current[key] !== moved[key])
            ? moved
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
    setDirectionsMoved((current) => {
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
    if (directionsMoved.xLeft) handleOnXLeftMove?.();
    if (directionsMoved.xRight) handleOnXRightMove?.();
    if (directionsMoved.yUp) handleOnYUpMove?.();
    if (directionsMoved.yDown) handleOnYDownMove?.();
  }, [
    directionsMoved,
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
