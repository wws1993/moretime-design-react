import { useLayoutEffect } from 'react';

const useMount = (fn: () => void) => {
  useLayoutEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
