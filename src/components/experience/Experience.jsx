import React from 'react'
import './experience.css'
import insa from '../../assets/insa.jpg'
import addis from '../../assets/aastu2.png'
import nerd from '../../assets/nerd.png'
function Experience() {
   return (
      <div className='container'>
         <div className="wrapper">
            <div>
               <h1 className='text-center text-secondary fs-1 mb1'>Experience</h1>
               <div className="experience_list">
                  <div className="experience" data-aos="fade-left" >
                     <img src={insa} alt="" />
                     <div>
                        <h1 className='fs-2 '>Information Network Security Administration</h1>
                        <p className='fs-3 '> Senior Fullstack Software Engineer</p>
                     </div>
                     {/* <p>Responsibility: </p> */}
                     {/* <ul>
                  
                    <li>Developing and Integrationg frontend and backend applications</li>
                    <li>Designing both SQL and NOSQL schemas according to the requirement</li>
                    <li>Evaluationg and analysing the performances of applications</li>
                    <li>Deploying Applicaitons on required platforms</li>
                    <li>Analysing and modifying already existing huge application code base</li>
                </ul> */}

                  </div>
                  <div className="experience" data-aos="fade-right" >

                     <img src={addis} alt="" />
                     <div>
                        <h1 className='fs-2 '>Addis Ababa Science And Technology University</h1>
                        <p className='fs-3 '> Developer in IOT Application development </p>
                     </div>
                  </div>
                  <div className="experience" data-aos="fade-left" >

                     <img src={nerd} alt="" />
                    <div>
                    <h1 className='fs-2 '>New Era Research And Development Center</h1>
                     <p className='fs-3 '> Programmer in Hardware control system design </p>

                    </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Experience
