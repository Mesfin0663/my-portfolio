import React from 'react'
import profile from '../../assets/DSC_2330.jpg'
import ParticlesComp from '../particles/ParticlesComp'

function Hero() {
  return (
    <div className="container   " id="home">
      <div className="wrapper ">

        <div>
         <div className='flex-center'>
         <img src={profile} alt="" className=" hero_img" data-aos="zoom-in" />

         </div>
        <div className="" style={{ "--flow-gap": "35px" }}>

<h1 data-aos="fade-up" className="text-primary mb1 text-center"><span class="fs-1 d-block">Mesfin Girma</span> </h1>
<h2 className='text-white fs-2 mb1' data-aos="fade-up" data-aos-delay="150" >I am a Software Engineer</h2>

<p data-aos="fade-up" data-aos-delay="300" className='text-white fs-3 mb1 text-justify'>A full stack software engineer with more than 3 years of experiance on responsive web design, mobile application design and also a strong understanding and experiance on backend rest api development.</p>
<div className="flex" data-aos="fade-up" data-aos-delay="600" >
  <button className="btn">Explore My Works</button>
  <p className="fs-3 text-primary">Call: +251943766122</p>
</div>

</div>
        </div>
      </div>

    </div>
  )
}

export default Hero
