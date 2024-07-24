import React from 'react';
import videoBg from '../Asset/FP Connection Structure.mp4';
import right_arrow from '../Asset/Icons/right-arrow.png';
import PicForm from './PictureFormat';
import contact from "../Asset/Icons/contact-mail.png";
import group from "../Asset/Icons/group.png";
import seting from "../Asset/Icons/seting.png";
import project from "../Asset/Icons/project.png";
import Footer from './Footer';



function HomePage() {


  return (
    <div className="main">
      <div className='py-2 h-[100vh] flex'>
        <div className="relative w-full h-full">
          <video className="w-full h-full object-cover" src={videoBg} loop muted autoPlay playsInline>
            Your browser does not support the video tag.
          </video>
          <div className="content px-2 flex flex-col justify-center ">
            <h1 className="text-6xl text-[#1fa5e0]">WELCOME TO QUAD SOLUTION INC.</h1>
            <br />
            <p className="uppercase text-3xl text-[#1fa5e0]">
              we value<br />
              quality<br />
              unique<br />
              advanced<br />
              development
            </p>
            <div className='flex justify-end items-end '>
              <button className='shape-filler px-5 py-2 flex justify-center items-center  m-5  text-3xl rounded-xl '>ENQUIRE <img src={right_arrow} alt="->" className='w-5 h-5 ml-4 ' /></button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="py-10 h-[100vh]  ">
        <div className="text-center  h-full">
          <h1 className="text-3xl mb-16">Our Leadership</h1>
          <div className="flex flex-row justify-center items-center">
            <PicForm image={''} name={"Usman"} title={"CEO"} />
            <PicForm image={''} name={"Usman"} title={"CEO"} />
            <PicForm image={''} name={"Usman"} title={"CEO"} />
            <PicForm image={''} name={"Usman"} title={"CEO"} />
          </div>
        </div>
        <br />
      </div>
      {/* Additional div sections here */}
      <div className="py-10 h-[100vh] ">
        <div className="text-center mb-8">
          <h1 className="text-3xl uppercase ">About Us</h1>
        </div>
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='flex flex-row mb-5'>
            <div className='border-2 border-white mx-5 p-5 w-40 h-40 flex items-center justify-center rounded-2xl cursor-pointer transition-transform duration-500 hover:-translate-y-5  shape-filler uppercase  ' style={{ boxShadow: ' 8px 8px 20px whitesmoke' }}>
          <img src={contact} alt="contact" />
            </div>
            <div className='border-2 border-white mx-5 p-5 w-40 h-40 flex items-center justify-center rounded-2xl cursor-pointer transition-transform duration-500 hover:-translate-y-5 shadow-xl shadow-[#06f7e9] shape-filler uppercase ' style={{ boxShadow: ' 8px 8px 20px whitesmoke' }}>
            <img src={group} alt="group" />

            </div>
          </div>
          <div className='flex flex-row'>
            <div className='border-2 border-white mx-5 p-5 w-40 h-40 flex items-center justify-center rounded-2xl cursor-pointer transition-transform duration-500 hover:-translate-y-5 shadow-xl shadow-[#06f7e9] shape-filler uppercase ' style={{ boxShadow: ' 8px 8px 20px whitesmoke' }}>
            <img src={seting} alt="seting" />

            </div>
            <div className='border-2 border-white mx-5 p-5 w-40 h-40 flex items-center justify-center rounded-2xl cursor-pointer transition-transform duration-500 hover:-translate-y-5 shadow-xl shadow-[#06f7e9] shape-filler uppercase ' style={{ boxShadow: ' 8px 8px 20px whitesmoke' }}>
            <img src={project} alt="project" />

            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default HomePage;
