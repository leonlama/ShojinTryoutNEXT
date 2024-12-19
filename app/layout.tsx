import './globals.css';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import NavBar from './components/NavBar';
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'Shojin Chess',
  description: 'A sleek Japanese-inspired chess game.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class">
          <div className="flex min-h-screen">
            <NavBar /> {/* NavBar is included here */}
            <div className="flex-1 flex flex-col">
              <header className="p-4 flex justify-between items-center bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
                <h1 className="text-xl font-bold">Shojin Chess</h1>
                <DarkModeToggle />
              </header>
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
