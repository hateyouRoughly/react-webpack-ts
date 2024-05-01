import React, { memo, ReactNode, useCallback, useRef, useState } from "react";
import useResizeObserver from '@react-hook/resize-observer'

const Sticky = ({ children, style, ...props }: { children: ReactNode, style?: React.CSSProperties }) => {
	const elementRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

	const handleResize = useCallback(() => {
		if (elementRef.current) {
      const { width, height } = elementRef.current.getBoundingClientRect();
      setSize({ width, height });
    }
	}, [elementRef]);
	
	useResizeObserver(elementRef, handleResize);

  return (
    <>
      <div style={{ position: 'fixed', width: '-webkit-fill-available', backgroundColor: 'white', ...style }} ref={elementRef} {...props}>{ children }</div>
			<div style={{ height: size.height }} />
    </>
  );
};

export default memo(Sticky);
