export default function Services() {
  const services = [
    {
      title: "Social Media Management",
      description: "Tailored strategies and standout content that enhance your presence across platforms, attract the right audience, and strengthen brand loyalty.",
      image: "/src/assetss/1.PNG"
    },
    {
      title: "Photo & Video",
      description: "Professional photography and high-quality videos that reflect your brand identity and showcase your products at their best.",
      image: "/src/assetss/2.png"
    },
    {
      title: "Design & Visual Identity",
      description: "Creative designs and a complete visual identity that set you apart from competitors and strengthen your market presence.",
      image: "/src/assetss/3.png"
    },
    {
      title: "Digital Ad Campaigns",
      description: "Effective ad campaign management that achieves the best results and increases return on investment.",
      image: "/src/assetss/4.png"
    },
    {
      title: "Websites & Apps Development",
      description: "End-to-end digital solutions for designing and developing modern websites and applications that meet your needs.",
      image: "/src/assetss/5.png"
    }
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="section-title-alt fade-in-up">Our Work Speaks for Itself</h2>
      
      <div className="services-alt-container">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`service-card-alt ${index % 2 === 0 ? 'left' : 'right'} fade-in-up`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="service-content-alt">
              <h3 className="service-title-alt">{service.title}</h3>
              <p className="service-description-alt">{service.description}</p>
              <button className="btn btn-service-alt">Browse Portfolio</button>
            </div>
            <div className="service-image-alt">
              <img src={service.image} alt={service.title} />
              <div className="service-image-overlay"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
