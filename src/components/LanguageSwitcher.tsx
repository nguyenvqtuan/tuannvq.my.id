'use client';

import { useState } from 'react';

interface LanguageSwitcherProps {
  locale: 'en' | 'vi';
  changeLocale: (locale: 'en' | 'vi') => void;
}

export default function LanguageSwitcher({ locale, changeLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getCurrentLanguageName = () => {
    return locale === 'en' ? 'English' : 'Tiếng Việt';
  };

  const getCurrentLanguageFlag = () => {
    return locale === 'en' ? '🇺🇸' : '🇻🇳';
  };

  const handleLanguageChange = (newLocale: 'en' | 'vi') => {
    changeLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200"
      >
        <span className="text-lg">{getCurrentLanguageFlag()}</span>
        <span className="font-medium">{getCurrentLanguageName()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
              locale === 'en' ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
            }`}
          >
            <span className="text-lg">🇺🇸</span>
            <span>English</span>
            {locale === 'en' && (
              <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <button
            onClick={() => handleLanguageChange('vi')}
            className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
              locale === 'vi' ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
            }`}
          >
            <span className="text-lg">🇻🇳</span>
            <span>Tiếng Việt</span>
            {locale === 'vi' && (
              <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
} 