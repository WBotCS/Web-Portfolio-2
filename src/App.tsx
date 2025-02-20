import React, { useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code2, Database, Layout, Brain, Settings, Terminal, GitBranch, Monitor, Briefcase, ExternalLink, Phone, MapPin, Moon, Sun, FileText } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { AnimateOnScroll } from './components/AnimateOnScroll';
import { TypewriterEffect } from './components/TypewriterEffect';
import { ContactForm } from './components/ContactForm';
import profilePic from './public/profile-pic.png';
import ChatWidget from './ChatWidget';


function App() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const welcomePhrases = [
    "> Hello world!",
    "> Welcome to my space...",
    "> npm install future",
    "> git commit -m 'passion'",
    "> while(true) learn();",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 z-50"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Hero Section */}
      <AnimateOnScroll animation="fade-in">
        <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
          {/* Typewriter Effect - Adjusted position and size */}
          <div className="fixed bottom-6 left-6 z-10">
            <AnimateOnScroll animation="fade-in" delay={1000}>
              <TypewriterEffect phrases={welcomePhrases} />
            </AnimateOnScroll>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
            <img 
                src="/profile-pic.png" 
                alt="Waddhanaboth Yi"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Waddhanabot Yi
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={400}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                A recent Computer Science graduate from Washington State University with a passion for crafting innovative and user-friendly software applications.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={600}>
              <div className="flex gap-4 justify-center mb-12">
                <a
                  href="https://github.com/WBotCS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-6 h-6 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/waddhanabot-yi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Linkedin className="w-6 h-6 dark:text-gray-300" />
                </a>
                <a
                  href="mailto:thanon43@gmail.com"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Mail className="w-6 h-6 dark:text-gray-300" />
                </a>
                <a
                  href="/Waddhanabot_Yi_2yr_Software_Developer2.pdf"
                  download
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group relative"
                >
                  <FileText className="w-6 h-6 dark:text-gray-300" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Download Resume
                  </span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
          <ChevronDown className="w-6 h-6 absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-500" />
        </section>
      </AnimateOnScroll>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <div className="relative">
                <img
                  src="/about-pic.jpg"
                  alt="Waddhanabot Yi at Voiland College"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <div>
                <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I thrive in collaborative environments and enjoy tackling challenging projects that make a positive impact. 
                  My experience includes mobile app development, UI/UX design, and leveraging technologies like Python, Java, 
                  and C++ to bring ideas to life.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm eager to contribute my skills and enthusiasm to a team where I can learn and grow while making a 
                  meaningful contribution.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Experience</h2>
          </AnimateOnScroll>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">2+</p>
                <p className="text-gray-600 dark:text-gray-300">Years Software Development</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600">B.S</p>
                <p className="text-gray-600 dark:text-gray-300">Computer Science</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Skills & Expertise</h2>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Programming Skills */}
            <AnimateOnScroll animation="slide-in-left">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 dark:text-white">Programming Skills</h3>
                
                <div className="space-y-4">
                  <SkillBar icon={<Code2 />} skill="Python" level="Experienced" />
                  <SkillBar icon={<Terminal />} skill="C/C++" level="Experienced" />
                  <SkillBar icon={<Code2 />} skill="Java" level="Intermediate" />
                  <SkillBar icon={<Database />} skill="SQL" level="Intermediate" />
                  <SkillBar icon={<Layout />} skill="UX/UI" level="Experienced" />
                  <SkillBar icon={<Code2 />} skill="HTML/CSS" level="Basic" />
                  <SkillBar icon={<Code2 />} skill="JavaScript" level="Experienced" />
                  <SkillBar icon={<Code2 />} skill="React" level="Intermediate" />
                </div>
              </div>
            </AnimateOnScroll>

            {/* Technical Skills */}
            <AnimateOnScroll animation="slide-in-right">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 dark:text-white">Technical Skills</h3>
                
                <div className="space-y-4">
                  <SkillBar icon={<Brain />} skill="Machine Learning" level="Experienced" />
                  <SkillBar icon={<Settings />} skill="IT Technician/Support" level="Intermediate" />
                  <SkillBar icon={<Code2 />} skill="Application Development" level="Experienced" />
                  <SkillBar icon={<Monitor />} skill="System Analysis" level="Intermediate" />
                  <SkillBar icon={<Code2 />} skill="Selenium" level="Intermediate" />
                  <SkillBar icon={<GitBranch />} skill="Git" level="Intermediate" />
                  <SkillBar icon={<Briefcase />} skill="Engineering Project Management" level="Experienced" />
                  <SkillBar icon={<Monitor />} skill="AutoCAD Maya" level="Experienced" />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Featured Projects</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={200}>
              <ProjectCard
                title="Theia Accessibility App"
                description="A mobile application designed to enhance accessibility through voice navigation and intuitive interfaces."
                image="/theia-app.png"
                githubLink="https://github.com/WBotCS/Theia-Disability-App.git"
                tags={['Mobile', 'Accessibility', 'Voice UI']}
              />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={400}>
              <ProjectCard
                title="AI Basketball Shot Tracker"
                description="Real-time basketball shot analysis using computer vision and machine learning technologies."
                image="/shot-tracker.png"
                githubLink="https://github.com/yourusername/shot-tracker"
                tags={['AI', 'Computer Vision', 'Python']}
              />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={600}>
              <ProjectCard
                title="Fragrance AI Recommendation"
                description="An AI-powered system that provides personalized fragrance recommendations based on user preferences."
                image="/fragrance-ai.png"
                githubLink="https://github.com/WBotCS/fragrance-recommondation.git"
                tags={['AI', 'Machine Learning', 'Web App']}
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Get in Touch</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimateOnScroll animation="slide-in-left">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-6 dark:text-white">Send Me a Message</h3>
                <ContactForm />
              </div>
            </AnimateOnScroll>

            {/* Direct Contact Info */}
            <AnimateOnScroll animation="slide-in-right">
              <div className="flex flex-col justify-center space-y-8">
                <h3 className="text-xl font-semibold mb-6 dark:text-white">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium dark:text-white">Email</p>
                      <a href="mailto:thanon43@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        thanon43@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">Washington State, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium dark:text-white">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/waddhanabot-yi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Waddhanabot Yi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>© 2024 Waddhanabot Yi. All rights reserved.</p>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}

function ProjectCard({ title, description, image, githubLink, tags }: {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  tags: string[];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>View on GitHub</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function SkillBar({ icon, skill, level }: { icon: React.ReactNode, skill: string, level: string }) {
  const getWidth = (level: string) => {
    switch (level.toLowerCase()) {
      case 'experienced':
        return 'w-full';
      case 'intermediate':
        return 'w-3/4';
      case 'basic':
        return 'w-1/2';
      default:
        return 'w-1/4';
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {icon && <div className="text-gray-700 dark:text-gray-300">{icon}</div>}
        <span className="font-medium dark:text-white">{skill}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">{level}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div className={`h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ${getWidth(level)}`}></div>
      </div>
    </div>
  );
}

export default App;