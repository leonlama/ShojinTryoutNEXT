export default function ClubsPage() {
    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold tracking-wider text-gray-800 dark:text-gray-200">Clubs</h1>
                    <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg">
                        Create Club
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Featured Clubs */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Featured Clubs</h2>
                        <div className="space-y-4">
                            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Tokyo Masters</h3>
                                    <span className="text-sm bg-accent text-white px-2 py-1 rounded">243 members</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Competitive players in Tokyo area</p>
                                <button className="text-accent hover:text-accent/80 text-sm">Join Club</button>
                            </div>
                            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Shojin Beginners</h3>
                                    <span className="text-sm bg-accent text-white px-2 py-1 rounded">1.2k members</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Learn and improve together</p>
                                <button className="text-accent hover:text-accent/80 text-sm">Join Club</button>
                            </div>
                        </div>
                    </div>

                    {/* Popular Clubs */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Popular Clubs</h2>
                        <div className="space-y-4">
                            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Evolution Tactics</h3>
                                    <span className="text-sm bg-accent text-white px-2 py-1 rounded">892 members</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Advanced evolution strategies</p>
                                <button className="text-accent hover:text-accent/80 text-sm">Join Club</button>
                            </div>
                            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Weekend Warriors</h3>
                                    <span className="text-sm bg-accent text-white px-2 py-1 rounded">567 members</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Casual weekend tournaments</p>
                                <button className="text-accent hover:text-accent/80 text-sm">Join Club</button>
                            </div>
                        </div>
                    </div>

                    {/* Your Clubs */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Your Clubs</h2>
                        <div className="space-y-4">
                            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Shojin Beginners</h3>
                                    <span className="text-sm bg-secondary text-white px-2 py-1 rounded">Member</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">3 new posts today</p>
                                <button className="text-accent hover:text-accent/80 text-sm">View Activity</button>
                            </div>
                            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Weekend Warriors</h3>
                                    <span className="text-sm bg-secondary text-white px-2 py-1 rounded">Member</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">1 new tournament</p>
                                <button className="text-accent hover:text-accent/80 text-sm">View Activity</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}