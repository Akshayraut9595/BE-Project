import React from 'react';
import './Home.css';  // Assuming you have a separate CSS file for Home styles

function Home() {
  return (
    <div className="home-container">
      {/* First Section with background image */}
      <section className="hero-section">
        <div className="overlay">
          <h2>Your Awesome Heading Here</h2>
          <p>This is some text over the background image</p>
        </div>
      </section>

      {/* Second Section with headings and images in grid */}
      <section className="content-section">
        <h1>What is DeepFake</h1>
        <h5>Sample Image</h5>

        {/* Grid layout for images */}
        <div className="image-grid">
          <div>
            <img src="https://via.placeholder.com/300" alt="Image 1" className="grid-image" />
            <p className='fake'>Fake</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/300" alt="Image 2" className="grid-image" />
            <p className='original'>Original</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
