
import React, { useState } from 'react';
import { Image, X, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PicturesApp = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'AI Neural Network Visualization',
      category: 'AI/ML Projects'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Computer Vision Project',
      category: 'Technical Work'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Data Visualization Dashboard',
      category: 'Data Science'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Machine Learning Model Training',
      category: 'AI/ML Projects'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Web Development Project',
      category: 'Full Stack'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Database Architecture',
      category: 'Backend'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Robotics Project',
      category: 'Hardware'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Code Review Session',
      category: 'Development'
    }
  ];

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleDownload = (imageUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = title.replace(/\s+/g, '_').toLowerCase() + '.jpg';
    link.click();
  };

  return (
    <div className="p-3 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-4 sm:mb-8">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">Pictures Gallery</h1>
        <p className="text-sm sm:text-base text-gray-600">
          Visual documentation of my projects, work, and technical achievements.
        </p>
      </div>

      {/* Image Grid - Responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {images.map((image) => (
          <Card key={image.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-32 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onClick={() => handleImageClick(image.url)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Image className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-2 sm:p-4">
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 truncate">{image.title}</h3>
                  <p className="text-white/80 text-xs truncate">{image.category}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Image Modal - Responsive */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative w-full h-full sm:max-w-4xl sm:max-h-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full sm:max-w-full sm:max-h-full object-contain rounded-none sm:rounded-lg"
            />
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 text-white hover:bg-black/70"
              onClick={handleCloseModal}
            >
              <X className="w-4 h-4" />
            </Button>

            {/* Action Buttons */}
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="bg-black/50 text-white hover:bg-black/70 text-xs sm:text-sm"
                onClick={() => {
                  const currentImage = images.find(img => img.url === selectedImage);
                  if (currentImage) {
                    handleDownload(selectedImage, currentImage.title);
                  }
                }}
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Download</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="bg-black/50 text-white hover:bg-black/70 text-xs sm:text-sm"
                onClick={() => window.open(selectedImage, '_blank')}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Open</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PicturesApp;
