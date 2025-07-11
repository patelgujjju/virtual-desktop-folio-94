
import React, { useState } from 'react';
import { Code, Database, Brain, Wrench, Globe, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsApp = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = {
    programming: {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, description: 'Advanced expertise in AI/ML, data science, and backend development' },
        { name: 'JavaScript', level: 85, description: 'Full-stack web development, React, Node.js' },
        { name: 'TypeScript', level: 80, description: 'Type-safe development for large-scale applications' },
        { name: 'Java', level: 75, description: 'Enterprise applications and Spring framework' },
        { name: 'C++', level: 80, description: 'System programming and algorithm optimization' },
        { name: 'SQL', level: 85, description: 'Database design and complex query optimization' }
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      icon: Wrench,
      skills: [
        { name: 'TensorFlow', level: 90, description: 'Deep learning model development and deployment' },
        { name: 'PyTorch', level: 85, description: 'Neural network research and implementation' },
        { name: 'React', level: 85, description: 'Modern frontend development with hooks and context' },
        { name: 'Node.js', level: 80, description: 'Backend development and API creation' },
        { name: 'scikit-learn', level: 90, description: 'Machine learning algorithms and model evaluation' },
        { name: 'Pandas', level: 95, description: 'Data manipulation and analysis' },
        { name: 'Flask/FastAPI', level: 85, description: 'RESTful API development and web services' },
        { name: 'Next.js', level: 75, description: 'Full-stack React applications with SSR/SSG' }
      ]
    },
    aiml: {
      title: 'AI/ML Technologies',
      icon: Brain,
      skills: [
        { name: 'Computer Vision', level: 90, description: 'Object detection, image segmentation, OpenCV' },
        { name: 'Natural Language Processing', level: 85, description: 'Text processing, sentiment analysis, transformers' },
        { name: 'Deep Learning', level: 90, description: 'CNN, RNN, transformer architectures' },
        { name: 'Large Language Models', level: 80, description: 'GPT, BERT, fine-tuning and prompt engineering' },
        { name: 'MLOps', level: 75, description: 'Model deployment, monitoring, and versioning' },
        { name: 'Generative AI', level: 85, description: 'GANs, VAEs, diffusion models' }
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      icon: Database,
      skills: [
        { name: 'Docker', level: 80, description: 'Containerization and deployment' },
        { name: 'AWS/GCP', level: 75, description: 'Cloud computing and ML services' },
        { name: 'Git/GitHub', level: 90, description: 'Version control and collaborative development' },
        { name: 'MongoDB/PostgreSQL', level: 85, description: 'Database design and administration' },
        { name: 'Kubernetes', level: 70, description: 'Container orchestration and scaling' },
        { name: 'Jupyter/Colab', level: 95, description: 'Interactive data science and prototyping' }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Skills & Technologies</h1>
        <p className="text-gray-600">
          Comprehensive overview of my technical expertise and proficiency levels.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => {
          const categoryData = skillCategories[category as keyof typeof skillCategories];
          const Icon = categoryData.icon;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{categoryData.title}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-gray-900">{skill.name}</CardTitle>
                <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Progress value={skill.level} className="h-2" />
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Soft Skills Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Soft Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              skill: 'Problem Solving',
              description: 'Analytical thinking and creative solution development',
              icon: Brain
            },
            {
              skill: 'Team Collaboration',
              description: 'Effective communication and teamwork in diverse environments',
              icon: Globe
            },
            {
              skill: 'Leadership',
              description: 'Project management and mentoring capabilities',
              icon: BarChart
            }
          ].map((softSkill, index) => {
            const Icon = softSkill.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{softSkill.skill}</h3>
                  <p className="text-sm text-gray-600">{softSkill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsApp;
