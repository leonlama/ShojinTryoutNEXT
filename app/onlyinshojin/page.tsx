export default function OnlyInShojinPage() {
    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 p-4">
                        <h1 className="text-4xl font-bold tracking-wider text-gray-800 dark:text-gray-200">
                            Only in <span className="text-accent">将進</span>
                        </h1>
                    </div>

                    <div className="p-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
                                Experience chess like never before with our revolutionary new game.
                            </p>

                            <div className="relative w-full aspect-video mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-accent to-secondary">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-xl font-medium">Preview Video Coming Soon</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Power Up Your Pieces</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Transform your chess pieces mid-game to unlock special abilities</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Stunning Visuals</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Immerse yourself in our Japanese-inspired art and animations</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-gray-900 rounded-xl">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Climb the Ranks</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Test your skills against players from around the world</p>
                                </div>
                            </div>

                            <div className="inline-flex items-center space-x-4">
                                <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium text-lg">
                                    Get Early Access
                                </button>
                                <button className="border border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-lg font-medium text-lg">
                                    See Features
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}