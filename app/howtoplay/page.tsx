export default function HowToPlay() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">How to Play Shojin</h1>
            
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Basic Rules</h2>
                <p>The game follows Chess 2024 rules (Castling, En passant, Pawns can move two squares from starting position)</p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Evolution Abilities</h2>
                <p>Each piece can be upgraded to gain a piece-specific ability. Upgrading is done by rotating the piece to show the larger side and costs one move.</p>
                <p>Using an ability (except Puppetmaster) downgrades the piece and costs one move.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Pawn → Landsknecht</h3>
                        <p>Can make two moves in one turn. Both moves follow pawn rules.</p>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Bishop → Assassin</h3>
                        <p>Can eliminate all enemy pieces in adjacent squares (8 fields).</p>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Knight → Shield Knight</h3>
                        <p>Protects all friendly pieces in adjacent squares from normal captures.</p>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Rook → Catapult</h3>
                        <p>Can eliminate first pieces in rook-movement directions without moving.</p>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Queen → Nemesis</h3>
                        <p>Immune to evolution abilities and can ignore Shield Knight protection.</p>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">King → Puppetmaster</h3>
                        <p>Can control enemy pieces through Jin mechanics when in check position.</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Special Rules</h2>
                <ul className="list-disc pl-6">
                    <li>Level 2 abilities are optional</li>
                    <li>Jin-controlled pieces cannot be upgraded</li>
                    <li>A king in check cannot evolve to Puppetmaster</li>
                    <li>Shield Knights cannot protect against check</li>
                    <li>Jinsho (Puppetmaster adjacent to enemy king) equals checkmate</li>
                </ul>
            </section>
        </div>
    );
}