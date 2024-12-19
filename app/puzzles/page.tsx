export default function Puzzles() {
    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 tracking-wider text-gray-900 dark:text-white">パズル</h1>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Daily Puzzle */}
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Daily Puzzle</h2>
                            <div className="aspect-square bg-gray-200 dark:bg-gray-700 mb-4">
                                {/* Chess board will be rendered here */}
                            </div>
                            <div className="space-y-2">
                                <p className="font-medium text-gray-900 dark:text-white">White to move - Mate in 2</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Difficulty: ★★★☆☆</p>
                                <button className="w-full bg-accent text-white py-2 rounded-lg mt-4 hover:bg-accent/90">
                                    Solve Puzzle
                                </button>
                            </div>
                        </div>

                        {/* Puzzle Categories */}
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Categories</h2>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <span className="text-gray-900 dark:text-white">Evolution Tactics</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">24 puzzles</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <span className="text-gray-900 dark:text-white">Jinsho Patterns</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">18 puzzles</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <span className="text-gray-900 dark:text-white">Shield Knight Defense</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">15 puzzles</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <span className="text-gray-900 dark:text-white">Assassin Combinations</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">21 puzzles</span>
                                </div>
                            </div>
                        </div>

                        {/* Progress Tracking */}
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Your Progress</h2>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-900 dark:text-white">Puzzles Solved</span>
                                        <span className="text-gray-900 dark:text-white">42/78</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                        <div className="bg-accent h-2.5 rounded-full" style={{width: '54%'}}></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                                        <p className="text-2xl font-bold text-gray-900 dark:text-white">854</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Rating</p>
                                    </div>
                                    <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                                        <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Day Streak</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Solutions */}
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Solutions</h2>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Evolution Tactics #12</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Solved in 2:45</p>
                                    </div>
                                    <span className="text-green-500">✓</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Jinsho Pattern #8</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Solved in 4:12</p>
                                    </div>
                                    <span className="text-green-500">✓</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Daily Puzzle</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Failed attempt</p>
                                    </div>
                                    <span className="text-red-500">×</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}