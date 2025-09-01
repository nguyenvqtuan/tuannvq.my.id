-- Sample data for tuannvq_portfolio database
-- This file contains example data for the three main tables

-- Insert sample messages (contact form submissions)
INSERT INTO messages (name, email, message, is_show, is_reply) VALUES
('John Doe', 'john@example.com', 'Great portfolio! I would like to discuss a potential collaboration.', true, false),
('Jane Smith', 'jane@techcorp.com', 'Impressive work! Are you available for freelance projects?', true, false),
('Mike Johnson', 'mike@startup.io', 'Your projects look amazing. Can we schedule a call?', true, false),
('Admin', 'admin@tuannvq.my.id', 'Thank you for your interest! I will get back to you soon.', true, true),
('Admin', 'admin@tuannvq.my.id', 'Yes, I am available for freelance work. Let me know the details.', true, true);

-- Insert sample projects
INSERT INTO projects (id, title, slug, description, image, link_demo, link_github, stacks, content, is_show, is_featured) VALUES
(1, 'E-commerce Platform', 'ecommerce-platform', 'A full-stack e-commerce solution with modern UI/UX', '/images/projects/ecommerce.jpg', 'https://demo-ecommerce.tuannvq.my.id', 'https://github.com/tuannvq/ecommerce-platform', ARRAY['React', 'Node.js', 'MongoDB', 'Stripe'], 'A comprehensive e-commerce platform built with modern technologies...', true, true),
(2, 'Task Management App', 'task-management-app', 'Collaborative task management with real-time updates', '/images/projects/taskapp.jpg', 'https://demo-taskapp.tuannvq.my.id', 'https://github.com/tuannvq/task-management', ARRAY['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'], 'A real-time collaborative task management application...', true, true),
(3, 'Portfolio Website', 'portfolio-website', 'This portfolio website built with Next.js and Tailwind CSS', '/images/projects/portfolio.jpg', 'https://tuannvq.my.id', 'https://github.com/tuannvq/portfolio', ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'], 'A modern, responsive portfolio website showcasing my work...', true, false),
(4, 'Weather Dashboard', 'weather-dashboard', 'Real-time weather information with beautiful charts', '/images/projects/weather.jpg', 'https://demo-weather.tuannvq.my.id', 'https://github.com/tuannvq/weather-dashboard', ARRAY['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS Grid'], 'A weather dashboard with real-time data and interactive charts...', true, false),
(5, 'Blog Platform', 'blog-platform', 'Content management system for bloggers', '/images/projects/blog.jpg', 'https://demo-blog.tuannvq.my.id', 'https://github.com/tuannvq/blog-platform', ARRAY['React', 'Express.js', 'MySQL', 'JWT'], 'A feature-rich blog platform with user authentication...', true, false);

-- Insert sample achievements
INSERT INTO achievements (id, credential_id, slug, name, issuing_organization, category, url_credential, issue_date, expiration_date, image, is_show) VALUES
(1, 'AWS-DEV-001', 'aws-developer', 'AWS Certified Developer Associate', 'Amazon Web Services', 'Cloud Computing', 'https://aws.amazon.com/certification/certified-developer-associate/', '2023-06-15', '2026-06-15', '/images/certificates/aws-developer.png', true),
(2, 'META-REACT-001', 'meta-react', 'React Developer Certification', 'Meta', 'Frontend Development', 'https://www.meta.com/careers/skills/certifications/react/', '2022-12-10', '2025-12-10', '/images/certificates/meta-react.png', true),
(3, 'COURSE-NODE-001', 'coursera-nodejs', 'Node.js Backend Development', 'Coursera', 'Backend Development', 'https://www.coursera.org/learn/nodejs-backend', '2021-08-20', NULL, '/images/certificates/coursera-nodejs.png', true),
(4, 'GOOGLE-ANDROID-001', 'google-android', 'Android Development Fundamentals', 'Google', 'Mobile Development', 'https://developers.google.com/training/android', '2022-03-15', NULL, '/images/certificates/google-android.png', true),
(5, 'MICROSOFT-AZURE-001', 'microsoft-azure', 'Azure Developer Associate', 'Microsoft', 'Cloud Computing', 'https://docs.microsoft.com/en-us/certifications/azure-developer/', '2023-09-20', '2026-09-20', '/images/certificates/microsoft-azure.png', true),
(6, 'UDEMY-PYTHON-001', 'udemy-python', 'Python for Data Science', 'Udemy', 'Data Science', 'https://www.udemy.com/course/python-for-data-science/', '2021-11-05', NULL, '/images/certificates/udemy-python.png', true);

-- Update message reply_to references
UPDATE messages SET reply_to = '1' WHERE id = 4;
UPDATE messages SET reply_to = '2' WHERE id = 5; 