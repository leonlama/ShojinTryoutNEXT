import Link from "next/link";

export default function AddFriendPage() {
    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 p-4">
                        <h1 className="text-4xl font-bold tracking-wider text-gray-800 dark:text-gray-200">Add Friend</h1>
                    </div>

                    <div className="p-6">
                        {/* Search Section */}
                        <div className="max-w-2xl mx-auto mb-12">
                            <div className="relative flex">
                                <input 
                                    type="text"
                                    placeholder="Search by username or friend code..."
                                    className="flex-1 px-6 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-accent text-lg text-gray-900 dark:text-gray-200"
                                />
                                <button className="ml-4 bg-accent hover:bg-accent/90 text-white px-6 py-4 rounded-lg">
                                    Search
                                </button>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mt-2 text-center">
                                You can also add friends using their friend code: #ABC123
                            </p>
                        </div>

                        {/* Suggested Friends */}
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Suggested Friends</h2>
                            <div className="space-y-4">
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-secondary rounded-full"></div>
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-gray-200">Nakamura Ryu</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">4 mutual friends</p>
                                        </div>
                                    </div>
                                    <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg">
                                        Add Friend
                                    </button>
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-accent rounded-full"></div>
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-gray-200">Kimura Sakura</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">2 mutual friends</p>
                                        </div>
                                    </div>
                                    <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg">
                                        Add Friend
                                    </button>
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-gray-200">Kato Hiroshi</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Played 3 games together</p>
                                        </div>
                                    </div>
                                    <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg">
                                        Add Friend
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}