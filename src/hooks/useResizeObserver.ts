import { useRef, useState, useEffect } from 'react';

const useResizeObserver = (): [React.RefObject<null>, number, number] => {
  const ref = useRef(null);
  const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;

        setDimensions({ width, height });
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);
  console.log(width, height)
  return [ref, height, width];
}

export default useResizeObserver;
