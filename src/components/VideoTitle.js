import React from "react";
import {
  AiOutlineCaretRight,
} from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-3 px-3 w-40 flex justify-center items-center text-xl bg-opacity-50 rounded-lg mr-2 hover:bg-opacity-80 ">
          <AiOutlineCaretRight className="mr-2" /> Play
        </button>
        <button className="bg-gray-500 text-white p-3 px-3 w-40 flex justify-center items-center  text-xl bg-opacity-50 rounded-lg mr-2 hover:bg-opacity-80 ">
          <IoIosInformationCircleOutline className="mr-2"/>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
