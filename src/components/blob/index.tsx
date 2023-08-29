import { useEffect, useRef } from 'react';

import './style.scss';

const Blob: React.FunctionComponent = (): React.ReactElement => {

  const blobRef = useRef<any>();

  useEffect((): (() => void) => {

    const pointerMoveListener = (e: any): void => {
      const { clientX, clientY } = e;
      blobRef.current.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: 'forwards' });
    };

    document.addEventListener('pointermove', pointerMoveListener);

    return () => document.removeEventListener('pointermove', pointerMoveListener);

  });

  return (
    <div className="blob-container">
      <div className="blob" ref={blobRef} />
      <div className="blob-blur" />
    </div>
  );

}

export default Blob;