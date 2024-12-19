'use client';
import { useEffect, useState } from 'react';
declare const createUnityInstance: any; // Temporary type declaration

export default function UnityGame() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUnityInstance = async () => {
      try {
        setIsLoading(true);
        const unityInstance = await createUnityInstance(
          document.querySelector("#unity-canvas"),
          {
            dataUrl: "/Build/WebGL.data",
            frameworkUrl: "/Build/WebGL.framework.js", 
            codeUrl: "/Build/WebGL.wasm",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "DefaultCompany",
            productName: "Shojin Chess",
            productVersion: "1.0",
          }
        );
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load the game. Please try refreshing the page.");
        setIsLoading(false);
      }
    };

    loadUnityInstance();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Loading Game...</h2>
        <p>Please wait while we prepare your chess experience.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Game Loading Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
      <canvas 
        id="unity-canvas" 
        className="w-full h-full"
        style={{ border: '1px solid rgba(0,0,0,0.1)' }}
      />
    </div>
  );
}
