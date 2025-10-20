import { useState } from 'react';
import { Card } from '../components/ui/card';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';

const Media = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  
  // Mock data for photos and videos
  const photos = [
  {
    id: 0,
    src: '/bible-study-group-discussion.jpg',  // صورة من مجلد المشروع
    alt: 'صورة نشاط 1'
  },
  {
    id: 1,
    src: '/community-service-helping-people.jpg',
    alt: 'صورة نشاط 2'
  },
  {
    id: 2,
    src: '/educational-video-faith-teaching.jpg',  // صورة من مجلد المشروع
    alt: 'صورة نشاط 1'
  },
  {
    id: 3,
    src: '/evangelical-campaign-outdoor-event.jpg',
    alt: 'صورة نشاط 2'
  },
  {
    id: 4,
    src: '/leadership-workshop.png',  // صورة من مجلد المشروع
    alt: 'صورة نشاط 1'
  },
  {
    id: 5,
    src: '/testimony-video-testimonial.jpg',
    alt: 'صورة نشاط 2'
  },
  {
    id: 6,
    src: '/young-person-testimony-inspiration.jpg',  // صورة من مجلد المشروع
    alt: 'صورة نشاط 1'
  },
  {
    id: 7,
    src: '/spiritual-music-concert-worship.jpg',
    alt: 'صورة نشاط 2'
  },
 
];
  
 const videos = [
    {
      id: 0,
      src: 'https://www.youtube.com/embed/nG1kMkX3MUk',
      title: 'فيديو نشاط 1'
    },
    {
      id: 1,
      src: 'https://www.youtube.com/embed/PXS1jLZFVsA',
      title: 'فيديو نشاط 2'
    },
    {
      id: 2,
      src: 'https://www.youtube.com/embed/njYQCwapyDU',
      title: 'فيديو نشاط 3'
    },
    {
      id: 3,
      src: 'https://www.youtube.com/embed/IIBWSOP6vWc',
      title: 'فيديو نشاط 4'
    },
    {
      id: 4,
      src: 'https://www.youtube.com/embed/TMztTY2oe0Y',
      title: 'فيديو نشاط 5'
    },
    {
      id: 5,
      src: 'https://www.youtube.com/embed/6fgXKbCZeUw',
      title: 'فيديو نشاط 6'
    }
  ];

  return (
    <div className="min-h-screen py-16 mr-8 ml-8">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title text-3xl font-bold text-blue-900 mb-6">معرض الوسائط</h2>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-blue-100 p-1 rounded-full">
              <button
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === 'photos' 
                    ? 'bg-white text-blue-900 shadow' 
                    : 'text-blue-700 hover:text-blue-900'
                }`}
                onClick={() => setActiveTab('photos')}
              >
                الصور
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === 'videos' 
                    ? 'bg-white text-blue-900 shadow' 
                    : 'text-blue-700 hover:text-blue-900'
                }`}
                onClick={() => setActiveTab('videos')}
              >
                الفيديوهات
              </button>
            </div>
          </div>
          
          {activeTab === 'photos' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {photos.map((photo) => (
                <AnimatedItem key={photo.id} className="overflow-hidden rounded-xl shadow-md">
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </AnimatedItem>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <AnimatedItem key={video.id} className="aspect-video">
                  <Card className="h-full overflow-hidden rounded-2xl">
                    <iframe
                      src={video.src}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </Card>
                </AnimatedItem>
              ))}
            </div>
          )}
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Media;
