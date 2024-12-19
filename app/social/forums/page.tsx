import Link from "next/link";

export default function ForumsPage() {
    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 p-4">
                        <div className="flex justify-between items-center">
                            <h1 className="text-4xl font-bold tracking-wider text-gray-800 dark:text-gray-200">Forums</h1>
                            <Link href="/social/forums/new">
                                <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg">
                                    New Thread
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="p-6 space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Game Discussion</h2>
                            <div className="space-y-3">
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <Link href="/social/forums/strategy">
                                        <h3 className="font-bold text-lg text-accent mb-2">Strategy & Tactics</h3>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Discuss advanced strategies, piece evolution tactics, and game theory
                                        </p>
                                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                            <span>243 threads</span>
                                            <span>Last post: 5 min ago</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <Link href="/social/forums/tournaments">
                                        <h3 className="font-bold text-lg text-accent mb-2">Tournaments & Events</h3>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Information about upcoming tournaments, championships and community events
                                        </p>
                                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                            <span>156 threads</span>
                                            <span>Last post: 1h ago</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Community</h2>
                            <div className="space-y-3">
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <Link href="/social/forums/general">
                                        <h3 className="font-bold text-lg text-accent mb-2">General Discussion</h3>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Chat about anything Shojin Chess related
                                        </p>
                                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                            <span>892 threads</span>
                                            <span>Last post: 15 min ago</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <Link href="/social/forums/feedback">
                                        <h3 className="font-bold text-lg text-accent mb-2">Feedback & Suggestions</h3>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Share your ideas and feedback to help improve the game
                                        </p>
                                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                            <span>324 threads</span>
                                            <span>Last post: 3h ago</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}