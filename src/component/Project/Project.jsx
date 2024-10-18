import React from 'react';
import Slider from '../Slider/Slider';
import projectDesign from '../data/projectdesign.json';
import { useInView } from 'react-intersection-observer';

function LazyImage({ src, alt }) {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Load the image only once when in view
    threshold: 0.1,     // Load when 10% of the image is visible
  });

  return (
    <img
      ref={ref}
      src={inView ? src : ''}
      alt={alt}
      style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
    />
  );
}

function Project() {
  const images = [
    "/assets/projectSliderImg/project1.jpeg",
    "/assets/projectSliderImg/project2.jpeg",
    "../assets/projectSliderImg/project3.jpeg",
    "/assets/projectSliderImg/project4.jpeg",
    "/assets/projectSliderImg/project5.jpeg",
    "/assets/projectSliderImg/project6.jpeg",
    "/assets/projectSliderImg/project7.jpeg",
    "/assets/projectSliderImg/project8.jpeg",
  ];

  return (
    <>
      <h1 style={{ padding: "10px" }}>My Design</h1>
      <Slider images={images} />

      <h2 style={{ margin: "10px", padding: "10px" }}>
        Some Designs of Catering Services, Hotel Services & Tour Packages
      </h2>

      <div className='project_imgs'>
        {projectDesign.map((item, index) => (
          <div key={index}>
            {item.catimg && (
              <LazyImage src={`/assets/${item.catimg}`} alt='Catering' />
            )}
            {item.hotimg && (
              <LazyImage src={`/assets/${item.hotimg}`} alt='Hotel' />
            )}
            {item.tourimg && (
              <LazyImage src={`/assets/${item.tourimg}`} alt='Tour' />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
