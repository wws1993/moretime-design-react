import { useLayoutEffect } from 'react';

/** 页面加载完成钩子 */
const useMounted = (fn: () => void) => {
  useLayoutEffect(() => {
    fn?.();
  }, []);
};

export default useMounted;
