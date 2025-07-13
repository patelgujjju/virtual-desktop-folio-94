import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Moon, 
  Sun, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Brain,
  Database,
  Award,
  Calendar,
  ChevronRight,
  Download,
  Sparkles,
  Zap,
  Target,
  Users,
  TrendingUp,
  Cpu,
  Globe,
  Layers,
  Settings,
  Heart
} from 'lucide-react';

const Main = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const skillCategories = [
    {
      title: 'Languages & Tools',
      icon: Code,
      gradient: 'from-blue-500 to-purple-600',
      skills: ['Python', 'C', 'C++', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Tableau']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      gradient: 'from-green-500 to-teal-600',
      skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'OpenCV', 'Node.js', 'Express.js']
    },
    {
      title: 'AI/ML Technologies',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-600',
      skills: ['RAG (Retrieval-Augmented Generation)', 'LLM Fine-Tuning', 'NLP', 'Computer Vision', 'Deep Learning', 'Object Detection (YOLOv3)', 'Multi-Agent AI Systems']
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      gradient: 'from-orange-500 to-red-600',
      skills: ['Git', 'GitHub', 'MySQL', 'Google Colab', 'Jupyter Notebook', 'Anaconda', 'Postman', 'Three.js']
    },
    {
      title: 'Soft Skills',
      icon: Heart,
      gradient: 'from-pink-500 to-rose-600',
      skills: ['Problem Solving', 'Critical Thinking', 'Team Collaboration', 'Leadership', 'Research-Driven Development']
    }
  ];

  const projects = [
    {
      title: 'SwiftWheels - Vehicle Rental Platform',
      description: 'Full-stack vehicle rental platform with advanced booking system and real-time availability tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://swift-wheels-omega.vercel.app/',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Object Detection System',
      description: 'Deep learning model for real-time object detection and classification with 95% accuracy.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      link: 'https://huggingface.co/spaces/dhruvin-patel/aies-object-extractor',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DeepFake Detection System',
      description: 'Advanced AI system to detect manipulated images and videos using neural networks.',
      tech: ['Python', 'PyTorch', 'Computer Vision', 'ML'],
      link: 'https://huggingface.co/spaces/dhruvin-patel/DeepFake-Image-Detector',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'RAG Q&A System',
      description: 'Retrieval-Augmented Generation system for intelligent document querying and analysis.',
      tech: ['Python', 'LangChain', 'Streamlit', 'NLP'],
      link: 'https://dhruvinhet-rag.streamlit.app/',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const experiences = [
    {
      role: 'AI/ML Engineer',
      company: 'Tech Innovation Labs',
      period: '2023 - Present',
      description: 'Developing cutting-edge AI solutions and machine learning models for enterprise clients.',
      achievements: ['Led 5+ ML projects', 'Improved model accuracy by 25%', 'Mentored junior developers']
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Inc.',
      period: '2022 - 2023',
      description: 'Built scalable web applications and implemented modern development practices.',
      achievements: ['Delivered 10+ projects', 'Reduced load time by 40%', 'Implemented CI/CD pipelines']
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DP</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">Dhruvinkumar Patel</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="rounded-full flex-shrink-0"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs sm:text-sm px-2 sm:px-4 py-2 flex-shrink-0 whitespace-nowrap">
                <a href="/desktop">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Try </span>DhruvOS
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className={`inline-block transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">DP</span>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                AI/ML Engineer &
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Passionate about creating intelligent solutions that bridge the gap between cutting-edge AI technology 
                and practical real-world applications. Let's build the future together.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Code, label: 'Projects Completed', value: '50+' },
              { icon: Users, label: 'Clients Served', value: '25+' },
              { icon: Award, label: 'Years Experience', value: '3+' },
              { icon: TrendingUp, label: 'Success Rate', value: '98%' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Crafting Intelligent Solutions with Passion
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a dedicated AI/ML Engineer and Full Stack Developer with a passion for creating innovative 
                solutions that make a real impact. With expertise spanning machine learning, deep learning, 
                and modern web technologies, I bridge the gap between complex AI algorithms and user-friendly applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                My journey in technology has been driven by curiosity and a commitment to continuous learning. 
                I believe in the power of AI to transform industries and improve lives, and I'm excited to be 
                part of this technological revolution.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Brain, title: 'AI Expertise', desc: 'Machine Learning & Deep Learning' },
                  { icon: Code, title: 'Full Stack', desc: 'Modern Web Development' },
                  { icon: Database, title: 'Data Science', desc: 'Analytics & Insights' },
                  { icon: Zap, title: 'Innovation', desc: 'Cutting-edge Solutions' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-1">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to Innovate</h3>
                    <p className="text-gray-600 dark:text-gray-300">Let's build something amazing together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and methodologies that power innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`h-1 bg-gradient-to-r ${category.gradient}`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 cursor-default text-xs px-3 py-1 font-medium border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Target className="w-4 h-4 mr-2" />
                      <span>{category.skills.length} Technologies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white dark:bg-gray-700 border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-gray-900 dark:text-white">{exp.role}</CardTitle>
                      <CardDescription className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
              <CardHeader>
                <CardTitle className="text-white">Get In Touch</CardTitle>
                <CardDescription className="text-blue-100">
                  I'm always interested in hearing about new opportunities and exciting projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>dhruvin.patel@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex space-x-4 pt-4">
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Quick Message</CardTitle>
                <CardDescription>Send me a message and I'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 dark:bg-gray-950 text-white border-t border-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DP</span>
                </div>
                <span className="font-bold text-xl text-white">Dhruvinkumar Patel</span>
              </div>
              <p className="text-gray-300 dark:text-gray-400 mb-4 max-w-md">
                AI/ML Engineer & Full Stack Developer passionate about creating intelligent solutions 
                that bridge cutting-edge technology with practical applications.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-300 hover:text-white">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-300 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-300 hover:text-white">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#skills" className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors">Projects</a>
                <a href="#experience" className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors">Experience</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Experience</h3>
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mb-3">
                <a href="/desktop">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Try DhruvOS
                </a>
              </Button>
              <p className="text-sm text-gray-300 dark:text-gray-400">
                Experience my portfolio in a unique desktop environment
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 dark:border-gray-700 text-center">
            <p className="text-gray-400 dark:text-gray-500">
              © 2024 Dhruvinkumar Patel. All rights reserved. Built with ❤️ and cutting-edge technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
