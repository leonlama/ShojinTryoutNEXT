export default function Analytics() {
    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 tracking-wider text-gray-900 dark:text-white">Analytics</h1>
                
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Game Statistics */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Game Statistics</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">Total Games Played</span>
                                <span className="font-bold text-gray-900 dark:text-white">12,458</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">Average Game Duration</span>
                                <span className="font-bold text-gray-900 dark:text-white">24 minutes</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">Most Popular Evolution</span>
                                <span className="font-bold text-gray-900 dark:text-white">Shield Knight</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">Checkmates by Jinsho</span>
                                <span className="font-bold text-gray-900 dark:text-white">18%</span>
                            </div>
                        </div>
                    </div>
      
                    {/* Piece Evolution Stats */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Evolution Usage</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">Landsknecht</span>
                                <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div className="bg-accent h-2.5 rounded-full" style={{width: '65%'}}></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">Assassin</span>
                                <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div className="bg-accent h-2.5 rounded-full" style={{width: '45%'}}></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">Shield Knight</span>
                                <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div className="bg-accent h-2.5 rounded-full" style={{width: '85%'}}></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">Catapult</span>
                                <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div className="bg-accent h-2.5 rounded-full" style={{width: '55%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
      
                    {/* Win Rate by Color */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Win Rate by Color</h2>
                        <div className="flex justify-around items-center h-48">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">52%</div>
                                <div className="bg-white w-20 h-20 rounded-full mb-2 mx-auto"></div>
                                <span className="text-gray-800 dark:text-gray-200">White</span>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">48%</div>
                                <div className="bg-gray-900 w-20 h-20 rounded-full mb-2 mx-auto"></div>
                                <span className="text-gray-800 dark:text-gray-200">Black</span>
                            </div>
                        </div>
                    </div>
      
                    {/* Recent Game Analysis */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Game Length Distribution</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">Under 15 moves</span>
                                <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div className="bg-secondary h-2.5 rounded-full" style={{width: '15%'}}></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">15-30 moves</span>
                                <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div className="bg-secondary h-2.5 rounded-full" style={{width: '45%'}}></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">31-50 moves</span>
                                <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div className="bg-secondary h-2.5 rounded-full" style={{width: '30%'}}></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 dark:text-gray-200">50+ moves</span>
                                <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div className="bg-secondary h-2.5 rounded-full" style={{width: '10%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}