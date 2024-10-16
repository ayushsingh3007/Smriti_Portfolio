import React from 'react'
import Slider from '../Slider/Slider'
import projectDesign from "../data/projectdesign.json"
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
      <h1 style={{padding:"10px"}}>My Design</h1>
    <Slider images={images} />
    <h2 style={{margin:"10px",padding:"10px"}}>Some Design of resturant or cafe</h2>
   <div className='project_imgs'>
    {projectDesign.map((item)=>{
      return (
        <div  >
          <img src={`/assets/${item.catimg}`} alt='not found'/>
        </div>
      )
    })}
        </div>
    </>
  )
}

export default Project
