
import React from 'react';
import { ExternalLink, Github, Play, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsApp = () => {
  const projects = [
    {
      id: 1,
      title: 'Deepfake Detection System',
      description: 'AI-powered system using MobileNetV2 and TensorFlow for detecting manipulated media with 3D anomaly visualization.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'OpenCV', 'Three.js'],
      date: 'Jan 2025',
      status: 'Live Demo',
      github: '#',
      demo: '#',
      type: 'AI/ML'
    },
    {
      id: 2,
      title: 'AI-Powered Object Detection Tool',
      description: 'Web application with YOLOv3 integration and Meta\'s Segment Anything Model for precise image segmentation.',
      technologies: ['Python', 'YOLOv3', 'Flask', 'React', 'OpenCV'],
      date: 'Jan 2025',
      status: 'Interactive',
      github: '#',
      demo: '#',
      type: 'Computer Vision'
    },
    {
      id: 3,
      title: 'Vehicle Rental System',
      description: 'Full-stack application with secure authentication, role-based access control, and MySQL database.',
      technologies: ['Node.js', 'Express', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      date: 'Sept 2024',
      status: 'Deployed',
      github: '#',
      demo: '#',
      type: 'Full Stack'
    },
    {
      id: 4,
      title: 'AI Personal Assistant',
      description: 'Python-based assistant with WhatsApp integration, task management, and intelligent automation features.',
      technologies: ['Python', 'WhatsApp API', 'Task Management', 'Automation'],
      date: 'Jan 2025',
      status: 'Beta',
      github: '#',
      demo: '#',
      type: 'AI/Automation'
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard',
      description: 'Interactive Tableau dashboard for customer purchase pattern analysis with actionable insights.',
      technologies: ['Tableau', 'Data Analytics', 'SQL', 'Business Intelligence'],
      date: 'Sept 2024',
      status: 'Live',
      github: '#',
      demo: '#',
      type: 'Analytics'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live Demo': return 'bg-green-100 text-green-800';
      case 'Interactive': return 'bg-blue-100 text-blue-800';
      case 'Deployed': return 'bg-purple-100 text-purple-800';
      case 'Beta': return 'bg-yellow-100 text-yellow-800';
      case 'Live': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'AI/ML': return 'bg-indigo-100 text-indigo-800';
      case 'Computer Vision': return 'bg-cyan-100 text-cyan-800';
      case 'Full Stack': return 'bg-orange-100 text-orange-800';
      case 'AI/Automation': return 'bg-pink-100 text-pink-800';
      case 'Analytics': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Projects</h1>
        <p className="text-gray-600">
          Explore my portfolio of AI/ML projects, web applications, and innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="mt-2 text-gray-600">
                    {project.description}
                  </CardDescription>
                </div>
                <div className="ml-4 space-y-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className={`block px-2 py-1 text-xs rounded-full ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{project.date}</span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex items-center space-x-1">
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </Button>
                    <Button size="sm" className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700">
                      <Play className="w-3 h-3" />
                      <span>Demo</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Want to see more?</h3>
        <p className="text-gray-600 mb-4">
          Check out my GitHub profile for more projects and contributions to open source.
        </p>
        <Button className="bg-gray-900 hover:bg-gray-800 text-white">
          <Github className="w-4 h-4 mr-2" />
          Visit GitHub Profile
        </Button>
      </div>
    </div>
  );
};

export default ProjectsApp;
