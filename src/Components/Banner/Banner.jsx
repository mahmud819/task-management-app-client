import React from "react";
import animation1 from '../../assets/Lottie/anami1.json'
import animation2 from '../../assets/Lottie/anamition.json'
import Lottie from "lottie-react";
import '../../App.css'

const Banner = () => {
  return (
    <div className="py-12 flex flex-col lg:flex-row">
      <div className="w-[30%]">
        <Lottie animationData={animation1} ></Lottie>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center text-black lg:flex-row">
          <hr className="w-[5%] border-gray-600 border-2 mr-2" />
          <h1 className="text-info fond-bold text-2xl pb-2">
            Managetask,Asign Task,Track Time
          </h1>
          <hr className="w-[5%] border-gray-600 border-2 ml-2 " />
        </div>
        <h1 className="text-6xl text-violet-700">
          One Workspace for <br />
          Eevery Team
        </h1>
        {/*  button  */}
        <div className="mx-auto mt-4 lg:mt-10">
        
        <button className="primary-btn hover:btn-sm" >For Free Trail</button>
        </div>
        
      </div>
      <div className="w-[20%]">
        <Lottie animationData={animation2}></Lottie>
      </div>
    </div>
  );
};

export default Banner;
