'use client'; // Ensure it's declared for client-side components

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
    <nav className="w-64 bg-gray-200 dark:bg-gray-800 h-screen p-4 border-r border-gray-300 dark:border-gray-700">
      <h1 className="text-2xl font-bold text-primary mb-8">Shojin Chess</h1>
      <ul className="space-y-4">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            className="text-gray-800 dark:text-gray-200 text-lg"
          >
            <Link href={item.href} className="hover:text-primary">
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
