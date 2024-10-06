import React from 'react'
import Slider from '../Slider/Slider'
function Project() {
  const images = [
     "../assets/projectSliderImg/project1.jpeg",
     "../assets/projectSliderImg/project2.jpeg",
     "../assets/projectSliderImg/project3.jpeg",
     "../assets/projectSliderImg/project4.jpeg",
     "../assets/projectSliderImg/project5.jpeg",
     "../assets/projectSliderImg/project6.jpeg",
     "../assets/projectSliderImg/project7.jpeg",
     "../assets/projectSliderImg/project8.jpeg",

];
  return (
    <>
      <h1 style={{padding:"10px"}}>My Design</h1>
    <Slider images={images} />;
        
    </>
  )
}

export default Project
