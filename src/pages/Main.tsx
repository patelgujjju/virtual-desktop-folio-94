
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Calendar, ArrowRight, Star, Code, Briefcase, GraduationCap, Award, Eye, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'HTML/CSS', 'SQL'],
      icon: Code
    },
    {
      category: 'AI/ML Technologies',
      items: ['TensorFlow', 'PyTorch', 'OpenCV', 'scikit-learn', 'Transformers', 'LangChain'],
      icon: Star
    },
    {
      category: 'Web Development',
      items: ['React', 'Node.js', 'Express.js', 'Flask', 'FastAPI', 'Next.js'],
      icon: Monitor
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Docker', 'MySQL', 'MongoDB', 'AWS', 'Streamlit'],
      icon: Briefcase
    }
  ];

  const experiences = [
    {
      title: 'AI Engineer Intern',
      company: 'Alchemyte Data Solutions LLP',
      period: 'June 2025 - July 2025',
      location: 'On-Site',
      type: 'Internship',
      points: [
        'Built RAG-based AI System using vector databases and LLMs for enterprise knowledge management',
        'Integrated pre-trained language models into enterprise-level systems with 95% accuracy improvement',
        'Developed custom embedding pipelines for document processing and semantic search'
      ]
    },
    {
      title: 'AI/ML Engineer Intern',
      company: 'Ahir Infotech',
      period: 'April 2025 - June 2025',
      location: 'Remote',
      type: 'Internship',
      points: [
        'Developed Healthcare Chatbot Model from scratch using transformer architecture',
        'Fine-tuned pre-trained models for disease prediction with 92% accuracy rate',
        'Implemented natural language processing for medical query understanding'
      ]
    }
  ];

  const projects = [
    {
      title: 'Deepfake Detection System',
      date: 'Jan 2025',
      technologies: ['Python', 'Flask', 'TensorFlow', 'OpenCV', 'JavaScript'],
      description: 'Advanced deepfake detection system using fine-tuned MobileNetV2 on 190,000 images with 3D anomaly visualization and real-time processing capabilities.',
      highlights: ['94% Detection Accuracy', 'Real-time Processing', '3D Visualization'],
      demo: 'https://huggingface.co/spaces/dhruvin-patel/DeepFake-Image-Detector'
    },
    {
      title: 'AI4Image - Object Detection Tool',
      date: 'Jan 2025',
      technologies: ['YOLOv8', 'Flask', 'OpenCV', 'React'],
      description: 'Comprehensive web application for object detection, segmentation, and image editing with AI-powered outputs and batch processing.',
      highlights: ['Multi-object Detection', 'Image Segmentation', 'Batch Processing'],
      demo: 'https://huggingface.co/spaces/dhruvin-patel/aies-object-extractor'
    },
    {
      title: 'SwiftWheels - Vehicle Rental System',
      date: 'Sept 2024',
      technologies: ['Node.js', 'Express', 'MySQL', 'React', 'JWT'],
      description: 'Full-stack vehicle rental platform with secure authentication, role-based access control, and comprehensive booking management system.',
      highlights: ['Secure Authentication', 'Admin Dashboard', 'Payment Integration'],
      demo: 'https://swift-wheels-omega.vercel.app/'
    },
    {
      title: 'RAG Q&A System',
      date: 'Dec 2024',
      technologies: ['Python', 'LangChain', 'Streamlit', 'OpenAI', 'FAISS'],
      description: 'Retrieval-Augmented Generation system for intelligent document querying with vector database integration.',
      highlights: ['Document Processing', 'Semantic Search', 'Context-aware Responses'],
      demo: 'https://dhruvinhet-rag.streamlit.app/'
    }
  ];

  const certifications = [
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2024' },
    { name: 'Python for Data Science', issuer: 'IBM', year: '2023' }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900'
    }`}>
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className={`flex items-center gap-4 px-6 py-3 rounded-full backdrop-blur-lg border transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800/80 border-gray-700/50 text-white' 
            : 'bg-white/80 border-gray-200/50 text-gray-900'
        }`}>
          <Button
            onClick={() => setIsDark(!isDark)}
            variant="ghost"
            size="sm"
            className="rounded-full"
          >
            {isDark ? '☀️' : '🌙'}
          </Button>
          <Button
            onClick={() => navigate('/desktop')}
            variant="ghost"
            size="sm"
            className="gap-2 rounded-full"
          >
            <Monitor className="w-4 h-4" />
            DhruvOS
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-blue-500' : 'bg-blue-400'
          }`} />
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-purple-500' : 'bg-purple-400'
          }`} />
        </div>

        <div className="relative text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Available for opportunities</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Dhruvinkumar
            </span>
            <br />
            <span className={isDark ? 'text-white' : 'text-gray-900'}>Patel</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI/ML Engineer & Full Stack Developer crafting intelligent solutions that bridge 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> cutting-edge technology</span> with 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> practical applications</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Phone className="w-4 h-4" />
              +91 9537428629
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Mail className="w-4 h-4" />
              dhruvin5134@gmail.com
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <MapPin className="w-4 h-4" />
              Pune, Maharashtra
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" className="gap-2 backdrop-blur-sm">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button variant="outline" className="gap-2 backdrop-blur-sm">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto opacity-50" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <Card className={`backdrop-blur-lg border-0 shadow-2xl ${
            isDark ? 'bg-gray-800/50' : 'bg-white/50'
          }`}>
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">AI/ML Engineer</span> and 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Full Stack Developer</span> currently 
                pursuing B.Tech in Computer Science at MIT World Peace University.
              </p>
              <p className="text-lg leading-relaxed">
                With hands-on experience in building AI systems, developing web applications, and solving complex problems, 
                I specialize in creating innovative solutions that make a real-world impact. My journey spans from 
                fine-tuning deep learning models to architecting scalable web applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className={`group hover:scale-105 transition-all duration-300 backdrop-blur-lg border-0 shadow-xl ${
                isDark ? 'bg-gray-800/50' : 'bg-white/70'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                    <h3 className="font-semibold text-lg">{skill.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2 mb-2 text-xs">
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
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className={`backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                isDark ? 'bg-gray-800/50' : 'bg-white/70'
              }`}>
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <Badge variant="outline" className="text-xs">{exp.type}</Badge>
                      </div>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-2 lg:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
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
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`group hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl ${
                isDark ? 'bg-gray-800/50' : 'bg-white/70'
              }`}>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-xs whitespace-nowrap">
                      {project.date}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <Badge key={idx} className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card className={`backdrop-blur-lg border-0 shadow-xl ${
              isDark ? 'bg-gray-800/50' : 'bg-white/70'
            }`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold">MIT World Peace University</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">B.Tech Computer Science (AI and Data Science)</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-600 dark:text-gray-300">CGPA: 8.36/10</span>
                      <span className="text-sm text-gray-500">2023 - Present</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className={`backdrop-blur-lg border-0 shadow-xl ${
              isDark ? 'bg-gray-800/50' : 'bg-white/70'
            }`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold">Certifications</h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            I'm always excited to discuss new opportunities, innovative projects, or collaborate on cutting-edge solutions. 
            Let's connect and explore how we can create something extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2 bg-white text-blue-600 hover:bg-gray-100">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${
        isDark ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-gray-50/50'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-semibold mb-2">Dhruvinkumar Patel</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © 2025 All rights reserved. Built with React & Tailwind CSS
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm" className="gap-2" onClick={() => navigate('/desktop')}>
                <Monitor className="w-4 h-4" />
                DhruvOS
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
