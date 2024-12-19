'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';

const ProfilePage = () => {
  // This would come from your auth/database
  const mockUser = {
    username: "ChessMaster2024",
    joinDate: "January 2024",
    rating: 1850,
    gamesPlayed: 324,
    winRate: 68.5,
    badges: [
      { id: 1, name: "NFT Holder", icon: "🎨", description: "Owns exclusive chess piece NFTs" },
      { id: 2, name: "Tournament Winner", icon: "🏆", description: "Won Spring Championship 2024" },
      { id: 3, name: "Veteran Player", icon: "⚔️", description: "Member for over 3 months" },
      { id: 4, name: "Puzzle Master", icon: "🧩", description: "Solved 1000+ puzzles" }
    ],
    recentGames: [
      { id: 1, result: "win", opponent: "GrandMaster123", rating: "+25" },
      { id: 2, result: "loss", opponent: "QueenSlayer", rating: "-15" },
      { id: 3, result: "win", opponent: "KnightRider", rating: "+20" }
    ]
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Profile Header */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-violet-500 flex items-center justify-center text-4xl text-white">
              {mockUser.username[0]}
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{mockUser.username}</h1>
              <p className="text-gray-600 dark:text-gray-400">Member since {mockUser.joinDate}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 rounded-full text-sm">
                  Rating: {mockUser.rating}
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                  Win Rate: {mockUser.winRate}%
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Games: {mockUser.gamesPlayed}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Badges & Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockUser.badges.map(badge => (
              <motion.div
                key={badge.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{badge.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{badge.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{badge.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Games */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Recent Games</h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            {mockUser.recentGames.map(game => (
              <div 
                key={game.id}
                className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${game.result === 'win' ? 'text-green-500' : 'text-red-500'}`}>
                    {game.result === 'win' ? '✓' : '✗'}
                  </span>
                  <span className="text-gray-900 dark:text-white">{game.opponent}</span>
                </div>
                <span className={`font-mono ${game.rating.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {game.rating}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;