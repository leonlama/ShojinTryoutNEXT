import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Game Loading Error</h2>
            <p>We're experiencing technical difficulties loading the game. Please try again later.</p>
          </div>
        </div>
      </div>
    </>
  );
}
