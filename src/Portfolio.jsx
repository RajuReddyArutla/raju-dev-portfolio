import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, Briefcase, GraduationCap, Award, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-400 rounded"></div>
              <span className="text-xl font-bold text-gray-900">Raju Reddy</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-cyan-400 transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-cyan-400 transition">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-cyan-400 transition">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-cyan-400 transition">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-cyan-400 transition">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="bg-cyan-400 text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Software Developer crafting scalable solutions
              </h1>
              <p className="text-xl text-gray-600 mb-4">Raju Reddy - Junior Software Developer</p>
              <p className="text-lg text-gray-600 mb-8">
                Passionate about building robust microservices and modern web applications. Experienced in Node.js, TypeScript, and cloud technologies.
              </p>
              <div className="flex space-x-4 mb-8">
                <button onClick={() => scrollToSection('projects')} className="bg-cyan-400 text-white px-8 py-3 rounded-full hover:bg-cyan-500 transition">
                  View My Work
                </button>
              </div>
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/raju-reddy-arutla-59656029a" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-400 transition">
                  <Linkedin size={28} />
                </a>
                <a href="https://github.com/RajuReddyArutla" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-400 transition">
                  <Github size={28} />
                </a>
                <a href="mailto:rajunani1424@gmail.com" className="text-gray-600 hover:text-cyan-400 transition">
                  <Mail size={28} />
                </a>
              </div>
            </div>
            {/* <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-100 rounded-full flex items-center justify-center">
                  <Code size={120} className="text-cyan-400" />
                </div>
              </div>
            </div> */}
            <div className="flex justify-center">
  <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl p-2">
    <img 
      src="/raju.jpg" 
      alt="Raju Reddy" 
      className="w-full h-full rounded-full object-cover"
    />
  </div>
</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a motivated Junior Software Developer with over a year of experience working in agile environments. I specialize in building scalable backend solutions using Node.js, TypeScript, and microservices architecture.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Hypermiles Travel Tech, I led the development of an Online Travel Agency platform, migrating from a monolithic architecture to robust microservices. I'm passionate about continuous learning, process improvement, and delivering high-quality solutions that solve real business problems.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <MapPin className="text-cyan-400 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Hyderabad, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-cyan-400 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">rajunani1424@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-cyan-400 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 9701867114</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages & Frameworks */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Languages & Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Node.js', 'TypeScript', 'JavaScript', 'React.js', 'HTML5', 'CSS3', 'GraphQL'].map(skill => (
                  <span key={skill} className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & APIs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Backend & Databases</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['RESTful APIs', 'Microservices', 'PostgreSQL', 'MySQL', 'Redis', 'NestJS'].map(skill => (
                  <span key={skill} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Cloud className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Cloud & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['AWS', 'Docker', 'GitHub Actions', 'CI/CD', 'Git', 'Postman'].map(skill => (
                  <span key={skill} className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Methodologies */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Tools & Methodologies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Agile', 'Jira', 'Trello', 'Slack', 'VS Code', 'OAuth2', 'JWT', 'AI Integration'].map(skill => (
                  <span key={skill} className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan-200"></div>
            
            <div className="ml-16 mb-12">
              <div className="absolute left-6 w-5 h-5 bg-cyan-400 rounded-full border-4 border-white"></div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-cyan-400 text-white px-3 py-1 rounded-full text-sm font-medium">Current</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Software Developer</h3>
                <p className="text-cyan-600 font-semibold mb-4">Hypermiles Travel Tech Pvt. Ltd. - Hyderabad</p>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>Led development of an Online Travel Agency web application, migrating from monolithic Node.js to microservices using TypeScript and NestJS, significantly improving scalability and uptime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>Designed and built RESTful APIs for travel search, booking, and payment modules for flights and hotels, leveraging PostgreSQL for robust data management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>Implemented enterprise-grade authentication and API security using OAuth2 and JWT, adhering to industry security standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>Integrated API documentation/testing with Postman and collaborated with UI/UX designers using Figma for seamless frontend-backend integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">•</span>
                    <span>Optimized system performance through modular design, peer code reviews, and maintainable architecture patterns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 h-48 flex items-center justify-center">
                <Database size={80} className="text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Online Travel Agency Platform</h3>
                <p className="text-gray-600 mb-4">
                  Scalable backend application built with Node.js v18 and TypeScript, featuring microservices architecture for travel booking, search, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs">Node.js</span>
                  <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs">TypeScript</span>
                  <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs">NestJS</span>
                  <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 h-48 flex items-center justify-center">
                <Code size={80} className="text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bank Application System</h3>
                <p className="text-gray-600 mb-4">
                  Python-based banking simulation with comprehensive features including account management, transactions, balance checking, deposits, withdrawals, and fund transfers with robust error handling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">Python</span>
                  <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">OOP</span>
                  <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">Error Handling</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 h-48 flex items-center justify-center">
                <Database size={80} className="text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Customer Segmentation Model</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning project for e-commerce customer classification using Python, enabling data-driven marketing strategies and personalized customer experiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">Python</span>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">ML</span>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">Data Science</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 h-48 flex items-center justify-center">
                <Code size={80} className="text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Collaborative Code Editor</h3>
                <p className="text-gray-600 mb-4">
                  Real-time collaborative code editor with room-based collaboration features, built for the Bit N Build International hackathon using HTML, CSS, and JavaScript.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">HTML</span>
                  <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">CSS</span>
                  <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">JavaScript</span>
                  <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">WebSocket</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="text-cyan-400" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-cyan-600 font-semibold mb-2">2020 - 2024</p>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Technology</h4>
                  <p className="text-gray-700 font-medium mb-1">Computer Science and Data Science</p>
                  <p className="text-gray-600">AVN Institute of Engineering and Technology</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-cyan-600 font-semibold mb-2">2018 - 2020</p>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Intermediate (MPC)</h4>
                  <p className="text-gray-700 font-medium mb-1">94% - SR Junior College</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-cyan-400" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Python Full Stack Development</h4>
                  <p className="text-gray-700 mb-2">QSpiders Training Institute</p>
                  <p className="text-gray-600 text-sm">Comprehensive certification covering full-stack development with Python, including frontend, backend, and database technologies</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Hackathon Achievement</h4>
                  <p className="text-gray-700 mb-2">Bit N Build International Hackathon</p>
                  <p className="text-gray-600 text-sm">Developed collaborative code editor with room-based real-time collaboration features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Have a question or a project in mind? I'd love to hear from you. Fill out the form below or reach out through one of my social channels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    rows="6"
                    placeholder="Hi, I'd like to talk about..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-cyan-400 text-white font-bold py-4 rounded-lg hover:bg-cyan-500 transition">
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <Mail className="text-cyan-600" size={24} />
                    </div>
                    <div>
                      <a href="mailto:rajunani1424@gmail.com" className="text-cyan-600 hover:text-cyan-700 font-medium">
                        rajunani1424@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <Phone className="text-cyan-600" size={24} />
                    </div>
                    <div>
                      <a href="tel:+919701867114" className="text-cyan-600 hover:text-cyan-700 font-medium">
                        +91 9701867114
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find me on Social Media</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/raju-reddy-arutla-59656029a" target="_blank" rel="noopener noreferrer" 
                     className="bg-cyan-50 p-4 rounded-lg hover:bg-cyan-100 transition">
                    <Linkedin size={28} className="text-cyan-600" />
                  </a>
                  <a href="https://github.com/RajuReddyArutla" target="_blank" rel="noopener noreferrer"
                     className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
                    <Github size={28} className="text-gray-700" />
                  </a>
                  <a href="mailto:rajunani1424@gmail.com"
                     className="bg-cyan-50 p-4 rounded-lg hover:bg-cyan-100 transition">
                    <Mail size={28} className="text-cyan-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Raju Reddy Arutla. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://linkedin.com/in/raju-reddy-arutla-59656029a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
<Linkedin size={20} />
</a>
<a href="https://github.com/RajuReddyArutla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
<Github size={20} />
</a>
</div>
</div>
</footer>
</div>
);
};
export default Portfolio;
