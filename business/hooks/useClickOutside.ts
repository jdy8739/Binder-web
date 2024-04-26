import { useCallback, useEffect } from 'react';

const useClickOutside = ({
  ref,
  callback,
}: {
  ref: HTMLElement;
  callback: () => void;
}) => {
  const handleOnEventOccur = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (ref && !ref.contains(e.target as Node)) {
        callback();
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    document.addEventListener('click', handleOnEventOccur);
    document.addEventListener('touchstart', handleOnEventOccur);

    return () => {
      document.removeEventListener('click', handleOnEventOccur);
      document.removeEventListener('touchstart', handleOnEventOccur);
    };
  }, [handleOnEventOccur]);
};

export default useClickOutside;
