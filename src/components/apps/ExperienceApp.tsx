
import React from 'react';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ExperienceApp = () => {
  const experiences = [
    {
      id: 1,
      title: 'AI Engineer Intern',
      company: 'Alchemyte Data Solutions LLP',
      location: 'On-Site',
      duration: 'June 2025 - July 2025',
      type: 'Internship',
      status: 'Current',
      description: 'Working on building and optimizing Retrieval-Augmented Generation (RAG) pipeline using vector databases and LLMs.',
      achievements: [
        'Built RAG-based AI System using vector databases and LLMs',
        'Integrated pre-trained large language models into enterprise-level search systems',
        'Optimized response systems for improved accuracy and performance'
      ],
      technologies: ['Python', 'RAG', 'Vector Databases', 'LLMs', 'AI/ML'],
      certificate: true
    },
    {
      id: 2,
      title: 'AI/ML Engineer Intern',
      company: 'Ahir Infotech',
      location: 'Remote',
      duration: 'April 2025 - June 2025',
      type: 'Internship',
      status: 'Completed',
      description: 'Developed AI models from scratch for healthcare applications, focusing on predictive analytics and chatbot development.',
      achievements: [
        'Developed AI model from scratch to predict diseases based on user-inputted symptoms',
        'Fine-tuned pre-trained models using symptom-disease datasets to increase prediction accuracy',
        'Built and deployed healthcare chatbot with intelligent response capabilities'
      ],
      technologies: ['Python', 'Machine Learning', 'Healthcare AI', 'Chatbot Development', 'Model Fine-tuning'],
      certificate: true
    }
  ];

  const education = [
    {
      id: 1,
      institution: 'MIT World Peace University',
      degree: 'B.Tech Computer Science (AI and Data Science)',
      location: 'Pune, Maharashtra',
      duration: 'August 2023 - Present',
      gpa: '8.36/10',
      status: 'Current',
      highlights: [
        'Specialization in Artificial Intelligence and Data Science',
        'Strong foundation in computer science fundamentals',
        'Active participation in AI/ML projects and research'
      ]
    },
    {
      id: 2,
      institution: 'Sahjanand School of Achiever',
      degree: 'HSC: 72% JEE Main: 91.41%',
      location: 'Gandhinagar, Gujarat',
      duration: '2022-23',
      status: 'Completed',
      highlights: [
        'Strong performance in Physics, Chemistry, Mathematics',
        'Qualified JEE Main with 91.41 percentile',
        'Foundation for engineering education'
      ]
    },
    {
      id: 3,
      institution: 'Caravan High School',
      degree: 'SSC: 92.8%',
      location: 'Gandhinagar, Gujarat',
      duration: '2020-21',
      status: 'Completed',
      highlights: [
        'Excellent academic performance across all subjects',
        'Developed strong analytical and problem-solving skills',
        'Built foundation for scientific thinking'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Current': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Experience & Education</h1>
        <p className="text-gray-600">
          My professional journey, internships, and educational background in AI/ML and Computer Science.
        </p>
      </div>

      {/* Professional Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Award className="w-6 h-6 mr-2 text-blue-600" />
          Professional Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-blue-600 mt-1">
                      {exp.company}
                    </CardDescription>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 space-y-2">
                    <Badge className={getStatusColor(exp.status)}>
                      {exp.status}
                    </Badge>
                    {exp.certificate && (
                      <Badge variant="outline" className="block text-center">
                        <Award className="w-3 h-3 mr-1" />
                        Certificate
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">{exp.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Award className="w-6 h-6 mr-2 text-purple-600" />
          Education
        </h2>
        
        <div className="space-y-6">
          {education.map((edu) => (
            <Card key={edu.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-purple-600 mt-1">
                      {edu.institution}
                    </CardDescription>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 space-y-2">
                    <Badge className={getStatusColor(edu.status)}>
                      {edu.status}
                    </Badge>
                    {edu.gpa && (
                      <Badge variant="outline" className="block text-center">
                        CGPA: {edu.gpa}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights</h4>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperienceApp;
