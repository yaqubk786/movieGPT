import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-gray-500 text-white p-3 px-3 w-40 flex justify-center items-center text-xl bg-opacity-50 rounded-lg mr-2 ">
          <AiOutlineCaretRight className="mr-2" /> Play
        </button>
        <button className="bg-gray-500 text-white p-3 px-3 w-40  text-xl bg-opacity-50 rounded-lg mr-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
