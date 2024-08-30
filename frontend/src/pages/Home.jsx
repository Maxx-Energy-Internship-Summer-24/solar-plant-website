import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import MaxxImage from "../images/Maxx.png";
import AlfredImage from "../images/Alfred.jpeg";
import JovensImage from "../images/jovens.jpeg";
import JahirImage from "../images/jahir.jpeg";

// HeroSection Component
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to MAXX Energy Data Portal</h1>
        <p>Analyze and explore solar plant generation data effortlessly.</p>
        <button className="cta-button">Explore Data</button>
      </div>
      <div className="hero-image">
        <img src={MaxxImage} alt="Solar Plant" />
      </div>
    </section>
  );
};

// SolarPlantHighlights Component with Statistical Summary
const SolarPlantHighlights = () => {
  const [highlights, setHighlights] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setHighlights({
        mostProductivePlant: "Plant Alpha",
        totalEnergyProduced: "5000 MWh this month",
        achievement: "Reduced carbon footprint by 20% compared to last year",
      });
    }, 1000);
  }, []);

  return (
    <section className="solar-plant-highlights-section">
      <h2>Solar Plant Highlights</h2>
      {highlights ? (
        <div className="highlights-content">
          <p>
            <strong>Most Productive Plant:</strong>{" "}
            {highlights.mostProductivePlant}
          </p>
          <p>
            <strong>Total Energy Produced:</strong>{" "}
            {highlights.totalEnergyProduced}
          </p>
          <p>
            <strong>Achievement:</strong> {highlights.achievement}
          </p>
        </div>
      ) : (
        <p>Loading highlights...</p>
      )}
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-number">150</span>
          <span className="stat-label">MWh Generated Today</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">20%</span>
          <span className="stat-label">Carbon Footprint Reduction</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5</span>
          <span className="stat-label">Plants Operating</span>
        </div>
      </div>
    </section>
  );
};

// SolarPlantUpdates Component for Recent Activities
const SolarPlantUpdates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setUpdates([
        { id: 1, text: "Plant Alpha reached a new production milestone." },
        { id: 2, text: "Maintenance scheduled for Plant Beta." },
        { id: 3, text: "New solar panels installed at Plant Gamma." },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="solar-plant-updates-section">
      <h2>Recent Updates</h2>
      {updates.length > 0 ? (
        <ul className="updates-list">
          {updates.map((update) => (
            <li key={update.id} className="update-item">
              {update.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading updates...</p>
      )}
    </section>
  );
};

// SolarPlantHighlightCards Component
const SolarPlantHighlightCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setCards([
        {
          id: 1,
          title: "Plant Alpha",
          description: "Highest output this month",
        },
        { id: 2, title: "Plant Beta", description: "Scheduled for upgrade" },
        { id: 3, title: "Plant Gamma", description: "New panels installed" },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="solar-plant-highlight-cards-section">
      <h2>Solar Plant Highlights</h2>
      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className="card-item">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// PrivateDataSection Component
// For page navigation
const handleNavigation = (url) => {
  window.location.href = url;
}
const PrivateDataSection = ({ onLogin }) => {
  return (
    <section className="private-data-section">
      <h2>Private Data Access</h2>
      <p>Login to view detailed data and perform in-depth analysis.</p>
      <button className="cta-button login-button" onClick={()=>handleNavigation("/login")}>
        Login
      </button>
    </section>
  );
};

// FeaturesSection Component
const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>Why Use Our Portal?</h2>
      <div className="features-grid">
        <FeatureItem
          title="Real-Time Data"
          description="Access the latest data from our solar plants, updated in real-time."
        />
        <FeatureItem
          title="Advanced Analytics"
          description="Utilize embedded tools to query, analyze, and visualize the data."
        />
        <FeatureItem
          title="Secure Access"
          description="Data security is our priority. Only authorized users can access sensitive information."
        />
      </div>
    </section>
  );
};

// FeatureItem Component
const FeatureItem = ({ title, description }) => {
  return (
    <div className="feature-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// TestimonialsSection Component with Images
const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setTestimonials([
        {
          id: 1,
          name: "Dumebi (Alfred) Chukwuma ",
          feedback: "This portal is amazing!",
          imgSrc: AlfredImage,
        },
        {
          id: 2,
          name: "Jovens Sagesse",
          feedback: "A game changer for data analysis!",
          imgSrc: JovensImage,
        },
        {
          id: 3,
          name: "Jahir Ballesteros",
          feedback: "Very intuitive and easy to use.",
          imgSrc: JahirImage,
        },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="testimonials-section">
      <h2>User Testimonials</h2>
      <div className="testimonial-carousel">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <img
              src={testimonial.imgSrc}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p>{testimonial.feedback}</p>
            <span>- {testimonial.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// GallerySection Component
const GallerySection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setImages([
        { id: 1, src: "/path/to/image1.jpg", alt: "Solar Plant 1" },
        { id: 2, src: "/path/to/image2.jpg", alt: "Solar Plant 2" },
        { id: 3, src: "/path/to/image3.jpg", alt: "Solar Plant 3" },
        { id: 4, src: "/path/to/image4.jpg", alt: "Solar Plant 4" },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="gallery-section">
      <h2>Our Solar Plants</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

// ArticlesSection Component
const ArticlesSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setArticles([
        {
          id: 1,
          title: "Maximizing Solar Energy Efficiency",
          summary:
            "Discover the latest methods to optimize solar energy output.",
        },
        {
          id: 2,
          title: "The Future of Solar Technology",
          summary: "Explore the upcoming trends in solar technology.",
        },
        {
          id: 3,
          title: "Sustainable Energy Solutions",
          summary:
            "Learn about the impact of solar energy on global sustainability.",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="articles-section">
      <h2>Latest Articles</h2>
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-item">
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

// Home Component
const Home = () => {
  const handleLogin = () => {
    // Handle login logic here
    alert("Login functionality coming soon!");
  };

  return (
    <div className="home-container">
      <HeroSection />
      <SolarPlantHighlights />
      <SolarPlantUpdates />
      <SolarPlantHighlightCards />
      <PrivateDataSection onLogin={handleLogin} />
      <FeaturesSection />
      <TestimonialsSection />
      <GallerySection />
      <ArticlesSection />
    </div>
  );
};

export default Home;
