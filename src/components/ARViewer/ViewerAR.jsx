'use client';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function ViewerAR({ glbSrc, usdzSrc, posterSrc, alt, enableAR = true, autoRotate = true }) {
  const viewerRef = useRef(null);
  const [isScriptReady, setIsScriptReady] = useState(false);
  const [canUseAR, setCanUseAR] = useState(false);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || !isScriptReady) return;
    const handleLoad = () => setCanUseAR(Boolean(viewer.canActivateAR));
    viewer.addEventListener('load', handleLoad);
    return () => viewer.removeEventListener('load', handleLoad);
  }, [isScriptReady]);

  return (
    <>
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        strategy="afterInteractive" onReady={() => setIsScriptReady(true)} />
      <model-viewer
        ref={viewerRef} src={glbSrc} ios-src={usdzSrc} poster={posterSrc} alt={alt}
        camera-controls auto-rotate
        {...(enableAR ? { ar: true, 'ar-modes': 'webxr scene-viewer quick-look' } : {})}
      >
        {enableAR && canUseAR && <button slot="ar-button">📱 Lihat dalam AR</button>}
      </model-viewer>
    </>
  );
}