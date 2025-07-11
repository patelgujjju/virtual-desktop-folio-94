
import React from 'react';
import { Award, Calendar, ExternalLink, Download, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CertificatesApp = () => {
  const certificates = [
    {
      id: 1,
      title: 'AI/ML for Geodata Analysis',
      issuer: 'ISRO (Indian Space Research Organisation)',
      date: 'Completed',
      type: 'Professional Certification',
      category: 'AI/ML',
      description: 'Advanced certification in applying artificial intelligence and machine learning techniques for geospatial data analysis and satellite imagery processing.',
      skills: ['Geospatial AI', 'Satellite Data Analysis', 'Remote Sensing', 'ML for Earth Observation'],
      status: 'Verified',
      credentialId: 'ISRO_AIML_2024',
      validUntil: 'Lifetime',
      level: 'Advanced'
    },
    {
      id: 2,
      title: 'Winter Consulting Program',
      issuer: 'IIT Guwahati',
      date: '2024',
      type: 'Professional Program',
      category: 'Consulting',
      description: 'Intensive winter program focused on technical consulting, problem-solving methodologies, and industry best practices.',
      skills: ['Technical Consulting', 'Problem Solving', 'Industry Analysis', 'Strategic Thinking'],
      status: 'Verified',
      credentialId: 'IITG_WCP_2024',
      validUntil: 'Lifetime',
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'RIDE\'23 Volunteer',
      issuer: 'MIT World Peace University',
      date: '2023',
      type: 'Volunteer Certificate',
      category: 'Leadership',
      description: 'Recognition for outstanding volunteer service during RIDE\'23 tech fest, demonstrating leadership and organizational skills.',
      skills: ['Event Management', 'Leadership', 'Team Coordination', 'Communication'],
      status: 'Verified',
      credentialId: 'MITWPU_RIDE23',
      validUntil: 'Lifetime',
      level: 'Participation'
    }
  ];

  const additionalAchievements = [
    {
      title: 'Deep Learning Specialization',
      provider: 'Coursera (DeepLearning.AI)',
      status: 'In Progress',
      completion: 75
    },
    {
      title: 'Machine Learning Engineering',
      provider: 'Udacity',
      status: 'In Progress',
      completion: 60
    },
    {
      title: 'AWS Machine Learning',
      provider: 'Amazon Web Services',
      status: 'Planned',
      completion: 0
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML': return 'bg-blue-100 text-blue-800';
      case 'Consulting': return 'bg-green-100 text-green-800';
      case 'Leadership': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-red-100 text-red-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Participation': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificates & Achievements</h1>
        <p className="text-gray-600">
          Professional certifications, courses, and recognition of my technical expertise and contributions.
        </p>
      </div>

      {/* Certificates Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Award className="w-6 h-6 mr-2 text-gold-600" />
          Verified Certificates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-gold-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900">{cert.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-blue-600 mt-1">
                      {cert.issuer}
                    </CardDescription>
                    <div className="flex items-center space-x-2 mt-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{cert.date}</span>
                    </div>
                  </div>
                  <div className="ml-4 space-y-2">
                    <Badge className={getCategoryColor(cert.category)}>
                      {cert.category}
                    </Badge>
                    <Badge variant="outline" className={`block text-center ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">{cert.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills Validated</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Status: </span>
                      <span className="text-green-600">{cert.status}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Valid: </span>
                      <span className="text-gray-600">{cert.validUntil}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4 border-t border-gray-100">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Verify
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* In Progress & Planned */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Continuous Learning</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {additionalAchievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-900">{achievement.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {achievement.provider}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      achievement.status === 'In Progress' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {achievement.status}
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${achievement.completion}%` }}
                    />
                  </div>
                  
                  <p className="text-xs text-gray-600 text-center">
                    {achievement.completion}% Complete
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certificate Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">3</div>
            <p className="text-sm text-gray-600">Verified Certificates</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">2</div>
            <p className="text-sm text-gray-600">In Progress</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-purple-600">12+</div>
            <p className="text-sm text-gray-600">Skills Validated</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">100%</div>
            <p className="text-sm text-gray-600">Verification Rate</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CertificatesApp;
