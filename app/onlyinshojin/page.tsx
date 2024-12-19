export default function OnlyInShojinPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6 tracking-tight">
                    Only in <span className="text-accent">将進</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                    A revolutionary new way to experience chess, coming soon.
                </p>

                <div className="relative w-full aspect-video mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-accent to-secondary">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xl font-medium">Preview Video Coming Soon</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="p-6 bg-gray-100 dark:bg-gray-400 rounded-xl">
                        <h3 className="text-xl font-semibold mb-3">Evolution System</h3>
                        <p className="text-gray-600 dark:text-gray-600">Evolve your pieces during gameplay for dynamic strategies</p>
                    </div>
                    <div className="p-6 bg-gray-100 dark:bg-gray-400 rounded-xl">
                        <h3 className="text-xl font-semibold mb-3">Japanese Aesthetics</h3>
                        <p className="text-gray-600 dark:text-gray-600">Beautiful art style inspired by traditional Japanese design</p>
                    </div>
                    <div className="p-6 bg-gray-100 dark:bg-gray-400 rounded-xl">
                        <h3 className="text-xl font-semibold mb-3">Global Rankings</h3>
                        <p className="text-gray-600 dark:text-gray-600">Compete with players worldwide in our unique ranking system</p>
                    </div>
                </div>

                <div className="inline-flex items-center space-x-4">
                    <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium">
                        Join Waitlist
                    </button>
                    <button className="border border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-lg font-medium">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}