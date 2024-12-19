export default function HowToPlay() {
    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 p-4">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">How to Play Shojin</h1>
                    </div>

                    <div className="p-6">
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Overview</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">Shojin is an exciting variant of chess where pieces can evolve to gain powerful abilities. The game combines traditional chess strategy with dynamic power-ups that can dramatically change the course of the game.</p>
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg mb-4">
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Core Concepts</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>Start with standard chess rules and pieces</li>
                                    <li>Pieces can be upgraded to gain special abilities</li>
                                    <li>Upgrading costs one move - choose your timing wisely!</li>
                                    <li>Using abilities (except Puppetmaster) downgrades the piece</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Evolution Abilities</h2>
                            <p className="mb-6 text-gray-700 dark:text-gray-300">Each chess piece can evolve into a more powerful form. Here's what each piece becomes:</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg transform hover:scale-102 transition-transform">
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Pawn → Landsknecht</h3>
                                    <p className="mb-2 text-gray-700 dark:text-gray-300">Double the action! Make two pawn moves in one turn.</p>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Perfect for: Breaking through pawn chains or quick advancement
                                    </div>
                                </div>
                                
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg transform hover:scale-102 transition-transform">
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Bishop → Assassin</h3>
                                    <p className="mb-2 text-gray-700 dark:text-gray-300">Eliminates all enemy pieces in adjacent squares.</p>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Perfect for: Clearing crowded areas or protecting your king
                                    </div>
                                </div>
                                
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg transform hover:scale-102 transition-transform">
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Knight → Shield Knight</h3>
                                    <p className="mb-2 text-gray-700 dark:text-gray-300">Creates a protective aura around adjacent friendly pieces.</p>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Perfect for: Defensive formations and protecting key pieces
                                    </div>
                                </div>
                                
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg transform hover:scale-102 transition-transform">
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Rook → Catapult</h3>
                                    <p className="mb-2 text-gray-700 dark:text-gray-300">Long-range elimination along rook movement lines.</p>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Perfect for: Controlling long lanes and forcing opponent movement
                                    </div>
                                </div>
                                
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg transform hover:scale-102 transition-transform">
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Queen → Nemesis</h3>
                                    <p className="mb-2 text-gray-700 dark:text-gray-300">Becomes immune to other evolution abilities.</p>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Perfect for: Countering enemy evolved pieces and breaking through defenses
                                    </div>
                                </div>
                                
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg transform hover:scale-102 transition-transform">
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">King → Puppetmaster</h3>
                                    <p className="mb-2 text-gray-700 dark:text-gray-300">Can control enemy pieces when in check position.</p>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Perfect for: Turning the tables when under pressure
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Rules to Remember</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Basic Chess Rules</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>All standard chess 2024 rules apply</li>
                                        <li>Regular castling is allowed</li>
                                        <li>En passant captures work normally</li>
                                        <li>Pawns can move two squares from start</li>
                                    </ul>
                                </div>
                                
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Special Conditions</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>Evolution abilities are optional to use</li>
                                        <li>Controlled pieces cannot be evolved</li>
                                        <li>Kings in check cannot evolve</li>
                                        <li>Shield Knights don't protect from check</li>
                                        <li>Jinsho (Puppetmaster next to enemy king) is checkmate</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}