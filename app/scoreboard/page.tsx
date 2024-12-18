export default function Scoreboard() {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 tracking-wider text-gray-900 dark:text-white">スコアボード</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Top Players</h2>
                
                <div className="space-y-4">
                  {/* Top Player Card */}
                  <div className="flex items-center justify-between bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-accent">1</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Grandmaster Tanaka</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Rating: 2400</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 dark:text-white">Win Rate: 76%</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Games: 342</p>
                    </div>
                  </div>
  
                  {/* Second Place */}
                  <div className="flex items-center justify-between bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-secondary">2</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Master Yamamoto</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Rating: 2350</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 dark:text-white">Win Rate: 72%</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Games: 289</p>
                    </div>
                  </div>
  
                  {/* Third Place */}
                  <div className="flex items-center justify-between bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-accent">3</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Sensei Nakamura</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Rating: 2320</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 dark:text-white">Win Rate: 70%</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Games: 256</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Matches</h2>
                <div className="space-y-3">
                  {/* Match History Items */}
                  <div className="flex items-center justify-between text-sm text-gray-900 dark:text-white">
                    <span>Tanaka vs Yamamoto</span>
                    <span className="text-accent">1 - 0</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-900 dark:text-white">
                    <span>Nakamura vs Suzuki</span>
                    <span className="text-accent">½ - ½</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-900 dark:text-white">
                    <span>Sato vs Tanaka</span>
                    <span className="text-accent">0 - 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }