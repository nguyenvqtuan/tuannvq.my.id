'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'certificates', label: 'Certificates', icon: '🏆' },
    { id: 'chatroom', label: 'Chat Room', icon: '💬' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'certificates':
        return <CertificatesSection />;
      case 'chatroom':
        return <ChatroomSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 h-full w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 shadow-lg z-50">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Tuan Nguyen</h1>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </div>
          
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="font-medium">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {renderSection()}
        </motion.div>
      </main>
    </div>
  );
}

// Home Section
function HomeSection() {
  return (
    <div className="text-center py-20">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-4xl">👨‍💻</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to My Portfolio
        </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hi! I&apos;m Tuan Nguyen, a passionate Full Stack Developer with expertise in modern web technologies.
            Explore my journey, projects, and experience in the tech world.
          </p>
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View Projects
          </button>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            Download CV
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// About Section
function AboutSection() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h3>
          <div className="space-y-3 text-gray-600">
            <p><strong>Name:</strong> Tuan Nguyen</p>
            <p><strong>Role:</strong> Full Stack Developer</p>
            <p><strong>Location:</strong> Vietnam</p>
            <p><strong>Experience:</strong> 5+ years</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Skills</h3>
          <div className="space-y-3">
            {['JavaScript/TypeScript', 'React/Next.js', 'Node.js', 'Python', 'SQL/NoSQL', 'AWS/Cloud'].map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Bio</h3>
        <p className="text-gray-600 leading-relaxed">
          I&apos;m a passionate developer who loves creating innovative solutions and learning new technologies. 
          With a strong foundation in both frontend and backend development, I enjoy building scalable applications 
          that solve real-world problems. When I&apos;m not coding, you can find me exploring new technologies, 
          contributing to open-source projects, or sharing knowledge with the developer community.
        </p>
      </div>
    </div>
  );
}

// Experience Section
function ExperienceSection() {
  const experiences = [
    {
      company: 'Tech Company A',
      role: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Led development of multiple web applications using React, Node.js, and cloud technologies.'
    },
    {
      company: 'Startup B',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Built and maintained various web applications, working with modern frameworks and databases.'
    },
    {
      company: 'Company C',
      role: 'Frontend Developer',
      period: '2019 - 2020',
      description: 'Developed responsive user interfaces and implemented modern design patterns.'
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{exp.period}</span>
            </div>
            <h4 className="text-lg font-medium text-blue-600 mb-2">{exp.company}</h4>
            <p className="text-gray-600">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      image: '📋'
    },
    {
      title: 'Portfolio Website',
      description: 'This portfolio website built with Next.js and Tailwind CSS.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '🌐'
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{project.image}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Certificates Section
function CertificatesSection() {
  const certificates = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      image: '☁️'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      image: '⚛️'
    },
    {
      name: 'Node.js Backend Development',
      issuer: 'Coursera',
      date: '2021',
      image: '🟢'
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Certificates</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4">{cert.image}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.name}</h3>
            <p className="text-gray-600 mb-2">{cert.issuer}</p>
            <p className="text-sm text-gray-500">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Chatroom Section
function ChatroomSection() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Chat Room</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">💬</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Chat Room</h3>
          <p className="text-gray-600 mb-6">
            Connect with me in real-time! This feature is coming soon.
          </p>
          <div className="bg-gray-100 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-gray-500">
              Features planned:
            </p>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• Real-time messaging</li>
              <li>• File sharing</li>
              <li>• Video calls</li>
              <li>• Code collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Section
function ContactSection() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p className="text-gray-600">tuan@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p className="text-gray-600">+84 XXX XXX XXX</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-medium text-gray-800">Location</p>
                <p className="text-gray-600">Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Send Message</h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
