import React, { useState } from 'react';
import { Download, Eye, Printer, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ResumeApp = () => {
  const [viewMode, setViewMode] = useState<'preview' | 'fullscreen'>('preview');

  const handleDownload = () => {
    // Create a new window with the resume content for printing/saving as PDF
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Dhruvinkumar Patel - Resume</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            .resume-header { background: linear-gradient(135deg, #2563eb, #4f46e5); color: white; padding: 30px; margin-bottom: 20px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 18px; font-weight: bold; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-bottom: 15px; }
            .experience-item { background: #f8f9fa; padding: 15px; margin-bottom: 15px; border-radius: 5px; }
            .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
            .skill-item { background: #f1f5f9; padding: 10px; border-radius: 5px; }
            @media print { body { margin: 0; } .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="resume-header">
            <h1>Dhruvinkumar Patel</h1>
            <p style="font-size: 20px; margin: 10px 0;">AI/ML Engineer | Full Stack Developer</p>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; font-size: 14px;">
              <span>📧 dhruvin5134@gmail.com</span>
              <span>📱 +91 9537428629</span>
              <span>📍 Pune, India</span>
              <span>💼 linkedin.com/in/dhruvinkumarpatel</span>
              <span>🔗 github.com/dhruvinhet</span>
            </div>
          </div>
          <div class="section">
            <div class="section-title">Professional Summary</div>
            <p>Passionate AI/ML Engineer with hands-on experience in developing intelligent systems, computer vision applications, and full-stack web solutions. Proven track record of building end-to-end projects from conception to deployment with expertise in Python, TensorFlow, and modern web technologies. Strong foundation in data science with 2+ internship experiences and 5+ deployed AI/ML projects.</p>
          </div>
          <div class="section">
            <div class="section-title">Education</div>
            <div class="experience-item">
              <h3>Bachelor of Engineering - Computer Engineering</h3>
              <p><strong>Pune University</strong> | 2020 - 2024 | CGPA: 8.5/10</p>
            </div>
          </div>
          <div class="section">
            <div class="section-title">Technical Skills</div>
            <div class="skills-grid">
              <div class="skill-item"><strong>Languages:</strong> Python, JavaScript, TypeScript, Java, C++</div>
              <div class="skill-item"><strong>AI/ML:</strong> TensorFlow, PyTorch, Scikit-learn, OpenCV</div>
              <div class="skill-item"><strong>Web:</strong> React, Node.js, Express.js, MongoDB</div>
              <div class="skill-item"><strong>Tools:</strong> Docker, AWS, Git, Kubernetes</div>
            </div>
          </div>
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      
      // Trigger print dialog
      setTimeout(() => {
        printWindow.print();
      }, 100);
    }
  };

  const handleFullscreen = () => {
    if (viewMode === 'preview') {
      setViewMode('fullscreen');
      // Request fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      setViewMode('preview');
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume Viewer</h1>
            <p className="text-gray-600">View, download, and share my professional resume.</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleFullscreen}
            >
              <Eye className="w-4 h-4 mr-2" />
              {viewMode === 'preview' ? 'Full Screen' : 'Exit Fullscreen'}
            </Button>
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
            <Button size="sm" onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Resume Preview */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardContent className="p-0">
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                {/* Resume Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
                  <h1 className="text-4xl font-bold mb-2">Dhruvinkumar Patel</h1>
                  <p className="text-xl text-blue-100 mb-4">AI/ML Engineer | Full Stack Developer</p>
                  <div className="flex flex-wrap gap-6 text-sm text-blue-100">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>dhruvin5134@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+91 9537428629</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Pune, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      <span>linkedin.com/in/dhruvinkumarpatel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>github.com/dhruvinhet</span>
                    </div>
                  </div>
                </div>

                {/* Resume Content */}
                <div className="p-8 space-y-8">
                  {/* Professional Summary */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                      Professional Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Passionate AI/ML Engineer with hands-on experience in developing intelligent systems, computer vision applications, 
                      and full-stack web solutions. Proven track record of building end-to-end projects from conception to deployment 
                      with expertise in Python, TensorFlow, and modern web technologies. Strong foundation in data science with 2+ 
                      internship experiences and 5+ deployed AI/ML projects.
                    </p>
                  </section>

                  {/* Education */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                      Education
                    </h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900">Bachelor of Engineering - Computer Engineering</h3>
                        <p className="text-blue-600 font-medium">Pune University</p>
                        <p className="text-gray-600">2020 - 2024 | CGPA: 8.5/10</p>
                        <p className="text-gray-700 mt-2">
                          Relevant Coursework: Machine Learning, Data Structures & Algorithms, Database Management Systems, 
                          Software Engineering, Computer Networks, Operating Systems
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Experience */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                      Professional Experience
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">AI/ML Engineering Intern</h3>
                            <p className="text-blue-600 font-medium">TechCorp Solutions</p>
                          </div>
                          <span className="text-gray-600 font-medium">Jun 2023 - Aug 2023</span>
                        </div>
                        <ul className="text-gray-700 space-y-2 mt-3">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            Developed computer vision models for object detection with 92% accuracy using YOLOv8
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            Implemented data preprocessing pipelines handling 50K+ images using OpenCV and PIL
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            Collaborated with cross-functional teams to deploy models using Docker and AWS
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">Data Science Intern</h3>
                            <p className="text-blue-600 font-medium">DataVision Analytics</p>
                          </div>
                          <span className="text-gray-600 font-medium">Jan 2023 - Apr 2023</span>
                        </div>
                        <ul className="text-gray-700 space-y-2 mt-3">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            Built predictive models for customer churn analysis achieving 88% precision
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            Created interactive dashboards using Streamlit and Plotly for data visualization
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            Processed and analyzed large datasets using Pandas, NumPy, and SQL
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Key Projects */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                      Key Projects
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">SwiftWheels - Vehicle Rental Platform</h3>
                        <p className="text-gray-700 mb-3">
                          Full-stack web application for vehicle rental services with real-time booking system
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-blue-200 text-blue-800 text-sm rounded font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Implemented user authentication and authorization system</li>
                          <li>• Developed responsive UI with modern design principles</li>
                          <li>• Integrated payment gateway and booking management</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Object Detection System</h3>
                        <p className="text-gray-700 mb-3">
                          Advanced computer vision system for real-time object detection and extraction
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {['Python', 'TensorFlow', 'OpenCV', 'YOLOv8', 'Streamlit'].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-green-200 text-green-800 text-sm rounded font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Achieved 94% accuracy in object detection across 80+ classes</li>
                          <li>• Deployed on Hugging Face Spaces with 1000+ users</li>
                          <li>• Optimized model performance for real-time processing</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">DeepFake Detection System</h3>
                        <p className="text-gray-700 mb-3">
                          ML-powered system for detecting manipulated images and deepfake content
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {['Python', 'PyTorch', 'CNN', 'Image Processing', 'Flask'].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-purple-200 text-purple-800 text-sm rounded font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Developed CNN model with 91% accuracy for deepfake detection</li>
                          <li>• Implemented advanced image preprocessing techniques</li>
                          <li>• Created user-friendly web interface for easy access</li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">RAG Q&A System</h3>
                        <p className="text-gray-700 mb-3">
                          Retrieval-Augmented Generation system for intelligent document-based question answering
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {['Python', 'LangChain', 'OpenAI', 'ChromaDB', 'Streamlit'].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-orange-200 text-orange-800 text-sm rounded font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Built intelligent Q&A system using LLM and vector embeddings</li>
                          <li>• Implemented document chunking and semantic search</li>
                          <li>• Achieved high relevance in answers with context retrieval</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Technical Skills */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                      Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Programming Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">AI/ML Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                          {['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Web Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools & Platforms</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Git', 'Docker', 'AWS', 'Streamlit', 'Jupyter', 'VS Code'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Certifications */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                      Certifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Machine Learning Specialization - Stanford/Coursera',
                        'Deep Learning Specialization - DeepLearning.AI',
                        'AWS Cloud Practitioner',
                        'Google Data Analytics Certificate',
                        'Python for Data Science - IBM',
                        'TensorFlow Developer Certificate'
                      ].map((cert, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-900">{cert}</h3>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Leadership & Extracurricular */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                      Leadership & Extracurricular Activities
                    </h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900">Technical Lead - College AI Club</h3>
                        <p className="text-gray-600 mb-2">2022 - 2024</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Led team of 15+ students in organizing AI/ML workshops and competitions</li>
                          <li>• Conducted technical sessions on machine learning fundamentals</li>
                          <li>• Mentored junior students in their AI/ML projects</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900">Volunteer - Tech for Good Initiative</h3>
                        <p className="text-gray-600 mb-2">2023 - Present</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Developed web solutions for local NGOs and small businesses</li>
                          <li>• Contributed to open-source projects focused on social impact</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resume Information Panel */}
        <div className="space-y-6">
          {/* Document Info */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Document Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Updated:</span>
                  <span className="font-medium">January 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Version:</span>
                  <span className="font-medium">3.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pages:</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-medium">PDF</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => window.open('https://linkedin.com/in/dhruvinkumarpatel', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => window.open('https://github.com/dhruvinhet', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  GitHub Profile
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => window.open('https://dhruvinkumarpatel.netlify.app/', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Portfolio Website
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resume Sections */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resume Sections</h3>
              <div className="space-y-2">
                {[
                  'Professional Summary',
                  'Education', 
                  'Professional Experience',
                  'Key Projects',
                  'Technical Skills',
                  'Certifications',
                  'Leadership & Extracurricular'
                ].map((section, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-700">{section}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-blue-600 hover:text-blue-700"
                      onClick={() => {
                        const element = document.querySelector(`h2:contains("${section}")`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <Eye className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResumeApp;
