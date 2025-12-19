import { Play, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    // Videos
    { 
      id: 1, 
      title: "Link Service PR", 
      tech: "Professional Service • Marketing",
      type: "video",
      video: "/photos/videos/link service PR.mp4",
      thumbnail: "/photos/videos/photo_5881828820363447248_y.jpg"
    },
    { 
      id: 2, 
      title: "Canada Video", 
      tech: "Travel • Showcase",
      type: "video",
      video: "/photos/videos/canada video.mp4",
      thumbnail: "/photos/videos/photo_5881828820363447249_y.jpg"
    },
    { 
      id: 3, 
      title: "5 Mistakes PR", 
      tech: "Educational • Content",
      type: "video",
      video: "/photos/videos/5 MISTAKES PR.mp4",
      thumbnail: "/photos/videos/photo_5881828820363447250_y.jpg"
    },
    { 
      id: 4, 
      title: "Pharmacy PR", 
      tech: "Healthcare • Marketing",
      type: "video",
      video: "/photos/pharmacie pr.mp4",
      thumbnail: "/photos/videos/photo_5881828820363447251_y.jpg"
    },
    { 
      id: 5, 
      title: "Professional PR Video", 
      tech: "Corporate • Branding",
      type: "video",
      video: "/photos/pr video.mp4",
      thumbnail: "/photos/videos/photo_5881828820363447252_y.jpg"
    },
    { 
      id: 6, 
      title: "Edited Showcase", 
      tech: "Creative • Production",
      type: "video",
      video: "/photos/edited 2.mp4",
      thumbnail: "/photos/videos/photo_5881828820363447253_y.jpg"
    },
    { 
      id: 7, 
      title: "Ads Video PR", 
      tech: "Advertising • Campaign",
      type: "video",
      video: "/photos/ADS VIDEO PR.mp4",
      thumbnail: "/photos/videos/photo_5881828820363447254_y.jpg"
    },
    // Images
    { 
      id: 8, 
      title: "Creative Design 1", 
      tech: "Visual Design • Graphics",
      type: "image",
      image: "/photos/videos/photo_5893464964805102482_x.jpg"
    },
    { 
      id: 9, 
      title: "Creative Design 2", 
      tech: "Visual Design • Graphics",
      type: "image",
      image: "/photos/videos/photo_5893464964805102483_x.jpg"
    },
    { 
      id: 10, 
      title: "Creative Design 3", 
      tech: "Visual Design • Graphics",
      type: "image",
      image: "/photos/videos/photo_5893464964805102484_x.jpg"
    },
    { 
      id: 11, 
      title: "Creative Design 4", 
      tech: "Visual Design • Graphics",
      type: "image",
      image: "/photos/videos/photo_5893464964805102485_x.jpg"
    },
    { 
      id: 12, 
      title: "Creative Design 5", 
      tech: "Visual Design • Graphics",
      type: "image",
      image: "/photos/videos/photo_5893464964805102486_x.jpg"
    },
    { 
      id: 13, 
      title: "Creative Design 6", 
      tech: "Visual Design • Graphics",
      type: "image",
      image: "/photos/videos/photo_5893464964805102487_x.jpg"
    },
    { 
      id: 14, 
      title: "Creative Design 7", 
      tech: "Visual Design • Graphics",
      type: "image",
      image: "/photos/videos/photo_5893464964805102488_x.jpg"
    }
  ];

  const videos = projects.filter(p => p.type === 'video');
  const images = projects.filter(p => p.type === 'image');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="section-title-alt fade-in-up">Featured Work</h2>
      <p className="portfolio-subtitle fade-in-up" style={{ animationDelay: '0.1s' }}>
        Explore our creative projects and professional deliverables
      </p>
      
      {/* Videos Section */}
      <div className="portfolio-category">
        <h3 className="category-title fade-in-up" style={{ animationDelay: '0.2s' }}>
          Video Projects
        </h3>
        <div className="projects-grid-masonry">
          {videos.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card-masonry ${project.type} fade-in-scale`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <video
                src={project.video}
                className="project-media"
                loop
                muted
                playsInline
                controls
              />
              <div className="project-overlay-masonry video-overlay">
                <Play className="media-icon pulse" size={40} />
              </div>
              <div className="project-info-masonry">
                <h3 className="project-title-masonry">{project.title}</h3>
                <p className="project-tech-masonry">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Images Section - Carousel */}
      <div className="portfolio-category">
        <h3 className="category-title fade-in-up" style={{ animationDelay: '0.3s' }}>
          Creative Designs
        </h3>
        <div className="carousel-container">
          <button className="carousel-btn carousel-btn-left" onClick={prevImage}>
            <ChevronLeft size={32} />
          </button>
          
          <div className="carousel-slide">
            <img 
              src={images[currentImageIndex]?.image} 
              alt={images[currentImageIndex]?.title} 
              className="carousel-image"
            />
            <div className="carousel-info">
              <h3 className="carousel-title">{images[currentImageIndex]?.title}</h3>
              <p className="carousel-tech">{images[currentImageIndex]?.tech}</p>
            </div>
          </div>
          
          <button className="carousel-btn carousel-btn-right" onClick={nextImage}>
            <ChevronRight size={32} />
          </button>
        </div>
        
        {/* Dots navigation */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
        
        {/* Image counter */}
        <p className="carousel-counter">
          {currentImageIndex + 1} / {images.length}
        </p>
      </div>
    </section>
  );
}
