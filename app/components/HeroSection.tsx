export default function HeroSection() {
  return (
    <section className="h-[400px] flex flex-col justify-center items-center text-center bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
      <h1 className="text-4xl font-medium text-gray-900 dark:text-gray-100">
        Shojin Chess
      </h1>
      <p className="text-base text-gray-600 dark:text-gray-400 mt-3 max-w-lg">
        A minimalist approach to chess, inspired by Japanese design principles
      </p>
      <div className="mt-8 opacity-75">
        <svg className="w-6 h-6 text-gray-400 dark:text-gray-600 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
