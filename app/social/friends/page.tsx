import Link from "next/link";

export default function FriendsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold tracking-wider">Friends</h1>
                <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg">
                    Add Friend
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Online Friends */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Online Now</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-4 rounded-lg">
                            <div className="relative">
                                <div className="w-12 h-12 bg-accent rounded-full"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex-grow">
                                <p className="font-semibold">Tanaka Yuki</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Playing Ranked Match</p>
                            </div>
                            <div className="flex space-x-2">
                                <button className="text-accent hover:text-accent/80 px-3 py-1 rounded-lg border border-accent">
                                    Challenge
                                </button>
                                <button className="text-accent hover:text-accent/80 px-3 py-1 rounded-lg border border-accent">
                                    Message
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-4 rounded-lg">
                            <div className="relative">
                                <div className="w-12 h-12 bg-secondary rounded-full"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex-grow">
                                <p className="font-semibold">Sato Mei</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">In Main Menu</p>
                            </div>
                            <div className="flex space-x-2">
                                <button className="text-accent hover:text-accent/80 px-3 py-1 rounded-lg border border-accent">
                                    Challenge
                                </button>
                                <button className="text-accent hover:text-accent/80 px-3 py-1 rounded-lg border border-accent">
                                    Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Offline Friends */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Offline</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-4 rounded-lg opacity-75">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex-grow">
                                <p className="font-semibold">Yamamoto Ken</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Last online: 2 hours ago</p>
                            </div>
                            <button className="text-gray-500 hover:text-gray-600 px-3 py-1 rounded-lg border border-gray-500">
                                Message
                            </button>
                        </div>

                        <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-4 rounded-lg opacity-75">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex-grow">
                                <p className="font-semibold">Suzuki Hana</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Last online: 1 day ago</p>
                            </div>
                            <button className="text-gray-500 hover:text-gray-600 px-3 py-1 rounded-lg border border-gray-500">
                                Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Friend Requests */}
            <div className="mt-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Friend Requests</h2>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-4 rounded-lg">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div className="flex-grow">
                            <p className="font-semibold">Ito Akira</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">2 mutual friends</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-accent hover:bg-accent/90 text-white px-3 py-1 rounded-lg">
                                Accept
                            </button>
                            <button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-3 py-1 rounded-lg">
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}