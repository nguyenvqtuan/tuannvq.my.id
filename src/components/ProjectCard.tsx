'use client';

import { Project } from '@/common/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        {project.is_featured && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        {/* Technology Stacks */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.stacks.map((stack, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.link_demo && (
            <Link
              href={project.link_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Live Demo
            </Link>
          )}

          {project.link_github && (
            <Link
              href={project.link_github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
