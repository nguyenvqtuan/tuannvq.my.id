'use client';

import React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { FaNpm } from 'react-icons/fa6';
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiLaravel,
  SiPhp,
  SiRedux,
  SiVuedotjs,
  SiFirebase,
  SiReactrouter,
  SiReacthookform,
  SiReacttable,
  SiMysql,
  SiMongodb,
  SiAstro,
  SiBun,
  SiYarn,
  SiNestjs,
  SiSupabase,
  SiJest,
  SiDocker,
  SiKotlin,
  SiSpring,
  SiAmazon,
  SiRedis,
  SiOracle,
  SiGradle,
  SiJunit5,
  SiSwagger,
  SiRabbitmq,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

export type SkillProps = {
  [key: string]: {
    icon: React.ReactNode;
    background: string;
    color: string;
    isActive?: boolean;
  };
};

const iconSize = 26;

export const STACKS: SkillProps = {
  Java: {
    icon: <FaJava size={iconSize} />,
    background: 'bg-orange-500',
    color: 'text-orange-500',
    isActive: true,
  },
  'Spring Boot': {
    icon: <SiSpring size={iconSize} />,
    background: 'bg-green-600',
    color: 'text-green-600',
    isActive: true,
  },
  'Spring Security': {
    icon: <SiSpring size={iconSize} />,
    background: 'bg-green-700',
    color: 'text-green-700',
    isActive: true,
  },
  'Vue.js': {
    icon: <SiVuedotjs size={iconSize} />,
    background: 'bg-green-400',
    color: 'text-green-400',
    isActive: true,
  },
  'React.js': {
    icon: <SiReact size={iconSize} />,
    background: 'bg-cyan-400',
    color: 'text-cyan-400',
    isActive: true,
  },
  TypeScript: {
    icon: <SiTypescript size={iconSize} />,
    background: 'bg-blue-500',
    color: 'text-blue-500',
    isActive: true,
  },
  JavaScript: {
    icon: <SiJavascript size={iconSize} />,
    background: 'bg-yellow-400',
    color: 'text-yellow-400',
    isActive: true,
  },
  HTML: {
    icon: <SiHtml5 size={iconSize} />,
    background: 'bg-orange-500',
    color: 'text-orange-500',
    isActive: true,
  },
  CSS: {
    icon: <SiCss3 size={iconSize} />,
    background: 'bg-blue-500',
    color: 'text-blue-500',
    isActive: true,
  },
  Bootstrap: {
    icon: <BsFillBootstrapFill size={iconSize} />,
    background: 'bg-violet-600',
    color: 'text-violet-600',
    isActive: true,
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: 'bg-sky-400',
    color: 'text-sky-400',
    isActive: true,
  },
  AWS: {
    icon: <SiAmazon size={iconSize} />,
    background: 'bg-orange-600',
    color: 'text-orange-600',
    isActive: true,
  },
  Redis: {
    icon: <SiRedis size={iconSize} />,
    background: 'bg-red-500',
    color: 'text-red-500',
    isActive: true,
  },
  Oracle: {
    icon: <SiOracle size={iconSize} />,
    background: 'bg-red-600',
    color: 'text-red-600',
    isActive: true,
  },
  'SQL Server': {
    icon: <SiMysql size={iconSize} />,
    background: 'bg-blue-600',
    color: 'text-blue-600',
    isActive: true,
  },
  MySQL: {
    icon: <SiMysql size={iconSize} />,
    background: 'bg-cyan-700',
    color: 'text-cyan-700',
    isActive: true,
  },
  Maven: {
    icon: <SiGradle size={iconSize} />,
    background: 'bg-orange-700',
    color: 'text-orange-700',
    isActive: true,
  },
  Gradle: {
    icon: <SiGradle size={iconSize} />,
    background: 'bg-blue-700',
    color: 'text-blue-700',
    isActive: true,
  },
  JUnit: {
    icon: <SiJunit5 size={iconSize} />,
    background: 'bg-green-500',
    color: 'text-green-500',
    isActive: true,
  },
  Swagger: {
    icon: <SiSwagger size={iconSize} />,
    background: 'bg-green-800',
    color: 'text-green-800',
    isActive: true,
  },
  RabbitMQ: {
    icon: <SiRabbitmq size={iconSize} />,
    background: 'bg-orange-800',
    color: 'text-orange-800',
    isActive: true,
  },
  Docker: {
    icon: <SiDocker size={iconSize} />,
    background: 'bg-blue-600',
    color: 'text-blue-500',
    isActive: true,
  },
  Git: {
    icon: <SiGithub size={iconSize} />,
    background: 'bg-slate-800',
    color: 'text-neutral-50',
    isActive: true,
  },
  'Next.js': {
    icon: <SiNextdotjs size={iconSize} />,
    background: 'bg-neutral-800',
    color: 'text-neutral-50',
    isActive: true,
  },
  'Node.js': {
    icon: <SiNodedotjs size={iconSize} />,
    background: 'bg-green-600',
    color: 'text-green-600',
    isActive: true,
  },
  PHP: {
    icon: <SiPhp size={iconSize} />,
    background: 'bg-indigo-400',
    color: 'text-indigo-400',
    isActive: true,
  },
  Npm: {
    icon: <FaNpm size={iconSize} />,
    background: 'bg-red-700',
    color: 'text-red-500',
    isActive: true,
  },
  Yarn: {
    icon: <SiYarn size={iconSize} />,
    background: 'bg-violet-800',
    color: 'text-sky-400',
    isActive: true,
  },
  bun: {
    icon: <SiBun size={iconSize} />,
    background: 'bg-orange-100',
    color: 'text-yellow-50',
    isActive: true,
  },
  AI: {
    icon: <BsRobot size={iconSize} />,
    background: 'bg-fuchsia-700',
    color: 'text-fuchsia-700',
    isActive: true,
  },
  // Keep some technologies but mark as inactive since they're not in your current stack
  Kotlin: {
    icon: <SiKotlin size={iconSize} />,
    background: 'bg-violet-600',
    color: 'text-violet-600',
    isActive: false,
  },
  PostgreSql: {
    icon: <BiLogoPostgresql size={iconSize} />,
    background: 'bg-blue-500',
    color: 'text-blue-500',
    isActive: false,
  },
  MongoDb: {
    icon: <SiMongodb size={iconSize} />,
    background: 'bg-green-600',
    color: 'text-green-600',
    isActive: false,
  },
  Firebase: {
    icon: <SiFirebase size={iconSize} />,
    background: 'bg-amber-500',
    color: 'text-amber-500',
    isActive: false,
  },
  Supabase: {
    icon: <SiSupabase size={iconSize} />,
    background: 'bg-emerald-500',
    color: 'text-emerald-500',
    isActive: false,
  },
  Jest: {
    icon: <SiJest size={iconSize} />,
    background: 'bg-pink-600',
    color: 'text-pink-600',
    isActive: false,
  },
  'Nest.js': {
    icon: <SiNestjs size={iconSize} />,
    background: 'bg-rose-600',
    color: 'text-rose-600',
    isActive: false,
  },
  Prisma: {
    icon: <SiPrisma size={iconSize} />,
    background: 'bg-teal-500',
    color: 'text-teal-500',
    isActive: false,
  },
  Laravel: {
    icon: <SiLaravel size={iconSize} />,
    background: 'bg-red-700',
    color: 'text-red-700',
    isActive: false,
  },
  'Express.js': {
    icon: <SiExpress size={iconSize} />,
    background: 'bg-neutral-800',
    color: 'text-neutral-800',
    isActive: false,
  },
  Redux: {
    icon: <SiRedux size={iconSize} />,
    background: 'bg-violet-500',
    color: 'text-violet-500',
    isActive: false,
  },
  'React Table': {
    icon: <SiReacttable size={iconSize} />,
    background: 'bg-rose-600',
    color: 'text-rose-600',
    isActive: false,
  },
  'React Hook Form': {
    icon: <SiReacthookform size={iconSize} />,
    background: 'bg-pink-500',
    color: 'text-pink-500',
    isActive: false,
  },
  'React Router': {
    icon: <SiReactrouter size={iconSize} />,
    background: 'bg-red-500',
    color: 'text-red-500',
    isActive: false,
  },
  Vite: {
    icon: <SiVite size={iconSize} />,
    background: 'bg-purple-500',
    color: 'text-purple-500',
    isActive: false,
  },
  'Framer Motion': {
    icon: <TbBrandFramerMotion size={iconSize} />,
    background: 'bg-yellow-400',
    color: 'text-yellow-400',
    isActive: false,
  },
  'Astro.js': {
    icon: <SiAstro size={iconSize} />,
    background: 'bg-violet-600',
    color: 'text-violet-600',
    isActive: false,
  },
};
