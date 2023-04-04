import { useState, useLayoutEffect, RefObject } from "react";
import useResizeObserver from "use-resize-observer";

/**
 * Get the position of an element.
 */
export const useElementPosition = (ref: RefObject<HTMLElement>) => {
  const [pos, setPos] = useState({
    height: 0,
    width: 0,
    top: 0,
    left: 0,
  });

  useResizeObserver<HTMLElement>({
    ref,
    onResize: () => {
      if (ref && ref.current) {
        setPos({
          height: ref.current.offsetHeight,
          width: ref.current.offsetWidth,
          top: ref.current.offsetTop,
          left: ref.current.offsetLeft,
        });
      }
    },
  });

  useLayoutEffect(() => {
    if (ref && ref.current) {
      setPos({
        height: ref.current.offsetHeight,
        width: ref.current.offsetWidth,
        top: ref.current.offsetTop,
        left: ref.current.offsetLeft,
      });
    }
  }, [ref]);

  return pos;
};
