'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const NavBar = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Analytics', href: '/analytics' },
    { name: 'Puzzles', href: '/puzzles' },
    { name: 'Scoreboard', href: '/scoreboard' },
    { name: 'Social', href: '/social' },
    { name: 'How to Play', href: '/howtoplay' },
  ];

  return (
    <nav className="w-64 bg-gray-900 h-screen p-6 shadow-xl">
      <h1 className="text-2xl font-bold text-white mb-10 tracking-wide">Shojin Chess</h1>
      <div className="mb-8 space-y-3">
        <Link href="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full py-2 px-4 bg-green-400 hover:bg-green-500 text-gray-900 rounded-lg font-medium transition-colors duration-200"
          >
            Log In
          </motion.button>
        </Link>
        <Link href="/signup">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full py-2 px-4 bg-green-300 hover:bg-green-400 text-gray-900 rounded-lg font-medium transition-colors duration-200"
          >
            Sign Up
          </motion.button>
        </Link>
      </div>
      <ul className="space-y-6">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-300 text-lg"
          >
            <Link 
              href={item.href} 
              className="block transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
