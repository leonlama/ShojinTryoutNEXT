'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const NavBar = () => {
  const navItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Analytics', href: '/analytics', icon: '📊' },
    { name: 'Puzzles', href: '/puzzles', icon: '🧩' },
    { name: 'Scoreboard', href: '/scoreboard', icon: '🏆' },
    { name: 'Social', href: '/social', icon: '👥' },
    { name: 'How to Play', href: '/howtoplay', icon: '❓' },
    { name: 'OnlyInShojin', href: '/onlyinshojin', icon: '✨' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-64 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-6 shadow-xl border-r border-gray-700">
      <div className="flex flex-col h-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white tracking-wider" style={{ fontFamily: '"Noto Serif JP", serif' }}>
            将進
          </h1>
          <p className="text-sm text-gray-400 mt-2">Shojin Chess</p>
        </div>

        <div className="mb-10 space-y-3">
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full py-3 px-4 bg-opacity-20 bg-white hover:bg-green-500 hover:bg-opacity-30 text-white rounded-lg font-medium transition-colors duration-300 border border-gray-600"
            >
              👤 Login
            </motion.button>
          </Link>
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full py-3 px-4 bg-opacity-10 bg-white hover:bg-green-500 hover:bg-opacity-20 text-white rounded-lg font-medium transition-colors duration-300 border border-gray-600"
            >
              ✨ Register
            </motion.button>
          </Link>
        </div>

        <ul className="space-y-6 flex-grow">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-gray-400 text-lg border-l-2 border-transparent hover:border-gray-500 pl-4"
            >
              <Link 
                href={item.href} 
                className="block transition-colors duration-300 hover:text-white"
              >
                {item.icon} {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="mt-auto pt-6 border-t border-gray-700">
          <p className="text-xs text-center text-gray-500">
            © 2024 Shojin Chess
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
