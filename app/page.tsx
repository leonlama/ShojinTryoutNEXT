import UnityGame from './components/UnityContainer';

export default function Home() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Shojin Chess Game
            </h2>
          </div>
          
          <div className="p-4">
            <UnityGame />
          </div>
        </div>
      </div>
    </div>
  );
}
