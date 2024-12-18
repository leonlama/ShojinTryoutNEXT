'use client';

import Unity, { UnityContext } from 'react-unity-webgl';
import { useState, useEffect } from 'react';
import Loader from './Loader';

const unityContext = new UnityContext({
  loaderUrl: '/unityBuild/Build.loader.js',
  dataUrl: '/unityBuild/Build.data',
  frameworkUrl: '/unityBuild/Build.framework.js',
  codeUrl: '/unityBuild/Build.wasm',
});

export default function UnityContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    unityContext.on('loaded', () => {
      setIsLoaded(true);
    });
    return () => {
      unityContext.removeAllEventListeners();
    };
  }, []);

  return (
    <div className="w-full h-[600px] bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
      {isLoaded ? (
        <Unity unityContext={unityContext} className="w-full h-full" />
      ) : (
        <Loader />
      )}
    </div>
  );
}
