
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Main = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript', 'C++', 'HTML/CSS', 'SQL'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Computer Vision', 'NLP'] },
    { category: 'Frameworks', items: ['React', 'Node.js', 'Express.js', 'Flask', 'Three.js'] },
    { category: 'Tools', items: ['Git', 'Docker', 'MySQL', 'MongoDB', 'Postman'] }
  ];

  const experiences = [
    {
      title: 'AI Engineer Intern',
      company: 'Alchemyte Data Solutions LLP',
      period: 'June 2025 - July 2025',
      location: 'On-Site',
      points: [
        'Built RAG-based AI System using vector databases and LLMs',
        'Integrated pre-trained language models into enterprise-level systems'
      ]
    },
    {
      title: 'AI/ML Engineer Intern',
      company: 'Ahir Infotech',
      period: 'April 2025 - June 2025',
      location: 'Remote',
      points: [
        'Developed Healthcare Chatbot Model from scratch',
        'Fine-tuned pre-trained models for disease prediction accuracy'
      ]
    }
  ];

  const projects = [
    {
      title: 'Deepfake Detection System',
      date: 'Jan 2025',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'TensorFlow'],
      description: 'Fine-tuned MobileNetV2 on 190,000 images for deepfake detection with 3D anomaly visualization'
    },
    {
      title: 'AI4Image - Object Detection Tool',
      date: 'Jan 2025',
      technologies: ['YOLOv3', 'Flask', 'OpenCV'],
      description: 'Web application for object detection, segmentation, and image editing with AI-powered outputs'
    },
    {
      title: 'Vehicle Rental System',
      date: 'Sept 2024',
      technologies: ['Node.js', 'Express', 'MySQL', 'JavaScript'],
      description: 'Full-stack system with secure authentication and role-based access control'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={() => setIsDark(!isDark)}
          variant="outline"
          size="sm"
          className={`${
            isDark 
              ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700' 
              : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
          }`}
        >
          {isDark ? '☀️' : '🌙'}
        </Button>
      </div>

      {/* Header */}
      <header className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dhruvinkumar Patel
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            AI/ML Engineer & Full Stack Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 9537428629
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              dhruvin5134@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Pune, Maharashtra
            </div>
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="sm" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button variant="default" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
          <ChevronDown className="w-6 h-6 mx-auto animate-bounce opacity-50" />
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                I'm a passionate AI/ML Engineer and Full Stack Developer currently pursuing B.Tech in Computer Science 
                at MIT World Peace University. With hands-on experience in building AI systems, developing web applications, 
                and solving complex problems, I specialize in creating innovative solutions that bridge the gap between 
                cutting-edge technology and practical applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-lg">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {project.date}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-6">
            <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">MIT World Peace University</h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-2">B.Tech Computer Science (AI and Data Science)</p>
                    <p className="text-gray-600 dark:text-gray-400">CGPA: 8.36/10</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-gray-600 dark:text-gray-400">Pune, Maharashtra</p>
                    <p className="text-gray-600 dark:text-gray-400">August 2023 - Present</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          <Button size="lg" className="gap-2">
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Dhruvinkumar Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Main;
