import React from 'react'
import profile from '../../assets/DSC_2330.jpg'
function Sidebar() {
  return (
    <div className='sidebar'>
       <img src={profile} alt="" className="profile_img" />

       <ul className="flow">
            <li><a className="uppercase text-white" href="/">Home</a></li>
            <li><a className="uppercase text-white" href="/services">Services</a></li>
            <li><a className="uppercase text-white" href="/experience">Experience</a></li>
            <li><a className="uppercase text-white" href="#home">Projects</a></li>
            <li><a className="uppercase text-white" href="#home">Education</a></li>
            <li><a className="uppercase text-white" href="#home">Certificates</a></li>


        </ul>
    </div>
  )
}

export default Sidebar
