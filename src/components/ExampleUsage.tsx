'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiGlobe, FiHeart } from 'react-icons/fi';
import { useAppStore } from '@/src/lib/store';
import useSWR from 'swr';

// Example API endpoint
const fetcher = (url: string) => fetch(url).then(res => res.json());

export const ExampleUsage = () => {
  const { theme, language, toggleTheme, setLanguage } = useAppStore();
  const [count, setCount] = useState(0);

  // Example SWR usage
  const { data, error, isLoading } = useSWR('/api/example', fetcher);

  const handleLanguageChange = (lang: 'en' | 'vi') => {
    setLanguage(lang);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Package Examples
        </h2>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {theme === 'light' ? (
            <FiSun className="w-5 h-5" />
          ) : (
            <FiMoon className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {/* Language Switcher */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Language
        </label>
        <div className="flex space-x-2">
          {(['en', 'vi'] as const).map(lang => (
            <motion.button
              key={lang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageChange(lang)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === lang
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <FiGlobe className="inline w-4 h-4 mr-1" />
              {lang.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Counter with Animation */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Counter
        </label>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            -
          </motion.button>

          <motion.span
            key={count}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-gray-900 dark:text-white min-w-[3rem] text-center"
          >
            {count}
          </motion.span>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            +
          </motion.button>
        </div>
      </div>

      {/* SWR Data Display */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          SWR Data Example
        </label>
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
          {isLoading && (
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-500 dark:text-gray-400"
            >
              Loading...
            </motion.div>
          )}
          {error && (
            <div className="text-red-500 dark:text-red-400">
              Error loading data
            </div>
          )}
          {data && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-700 dark:text-gray-300"
            >
              <pre className="text-sm">{JSON.stringify(data, null, 2)}</pre>
            </motion.div>
          )}
        </div>
      </div>

      {/* Framer Motion Animation */}
      <div className="text-center">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="inline-block"
        >
          <FiHeart className="w-8 h-8 text-red-500" />
        </motion.div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Animated with Framer Motion
        </p>
      </div>
    </motion.div>
  );
};
