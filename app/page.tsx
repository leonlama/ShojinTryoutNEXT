'use client';
import { useEffect, useState } from 'react';
declare const createUnityInstance: any; // Temporary type declaration

export default function Home() {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700 p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Play Online Now
            </h2>
          </div>
          
          <div className="p-4">
            {isLoading ? (
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Loading Game...</h2>
                <p>Please wait while we prepare your chess experience.</p>
              </div>
            ) : error ? (
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Game Loading Error</h2>
                <p>{error}</p>
              </div>
            ) : (
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <canvas 
                  id="unity-canvas" 
                  className="w-full h-full"
                  style={{ border: '1px solid rgba(0,0,0,0.1)' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
