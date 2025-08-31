'use client';

import { Achievement } from '@/common/types';
import Image from 'next/image';
import Link from 'next/link';

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Achievement Image */}
      <div className="relative h-48 w-full">
        <Image
          src={achievement.image}
          alt={achievement.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Achievement Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {achievement.name}
        </h3>
        
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Issued by:</span> {achievement.issuing_organization}
        </p>

        {achievement.category && (
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {achievement.category}
          </p>
        )}

        <div className="mb-4">
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Issue Date:</span> {achievement.issue_date}
          </p>
          
          {achievement.expiration_date && (
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Expires:</span> {achievement.expiration_date}
            </p>
          )}
        </div>

        {/* Action Button */}
        <div className="flex gap-3">
          <Link
            href={achievement.url_credential}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            View Credential
          </Link>
          
          {achievement.credential_id && (
            <div className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg">
              ID: {achievement.credential_id}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 