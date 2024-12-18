export default function Community() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-12 tracking-wider">コミュニティ</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Friends Section */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Friends</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-3 rounded-lg">
                            <div className="w-12 h-12 bg-accent rounded-full"></div>
                            <div>
                                <p className="font-semibold">Tanaka Yuki</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Online • Playing</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-3 rounded-lg">
                            <div className="w-12 h-12 bg-secondary rounded-full"></div>
                            <div>
                                <p className="font-semibold">Sato Mei</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Online • In Menu</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-3 rounded-lg opacity-50">
                            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                            <div>
                                <p className="font-semibold">Yamamoto Ken</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Offline • 2h ago</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full bg-accent text-white py-2 rounded-lg mt-4 hover:bg-accent/90">
                        Find Friends
                    </button>
                </div>

                {/* Clubs Section */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Clubs</h2>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold">Tokyo Masters</h3>
                                <span className="text-sm bg-accent text-white px-2 py-1 rounded">243 members</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Competitive players in Tokyo area</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold">Shojin Beginners</h3>
                                <span className="text-sm bg-accent text-white px-2 py-1 rounded">1.2k members</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Learn and improve together</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold">Evolution Tactics</h3>
                                <span className="text-sm bg-accent text-white px-2 py-1 rounded">892 members</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Advanced evolution strategies</p>
                        </div>
                    </div>
                    <button className="w-full bg-accent text-white py-2 rounded-lg mt-4 hover:bg-accent/90">
                        Browse Clubs
                    </button>
                </div>

                {/* Forums Section */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Forums</h2>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                            <h3 className="font-semibold text-accent mb-1">Strategy Discussion</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Latest: Shield Knight meta analysis</p>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>32 replies</span>
                                <span>2 min ago</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                            <h3 className="font-semibold text-accent mb-1">Tournament Hub</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Latest: Summer Championship signups</p>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>156 replies</span>
                                <span>1h ago</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                            <h3 className="font-semibold text-accent mb-1">Bug Reports</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Latest: Catapult visual glitch</p>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>8 replies</span>
                                <span>3h ago</span>
                            </div>
                        </div>
                    </div>
                    <button className="w-full bg-accent text-white py-2 rounded-lg mt-4 hover:bg-accent/90">
                        View All Forums
                    </button>
                </div>
            </div>
        </div>
    );
}