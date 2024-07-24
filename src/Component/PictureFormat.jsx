import React from "react";
import personDef from "../Asset/Icons/user.png";
export default function PicForm({ image, name, title }) {
    return (
        <div className="p-6 max-w-md mx-auto border-2 border-[#1400c8] rounded-lg m-5 hover:-translate-y-10 hover:cursor-pointer transition-transform duration-500">
            <h1 className="text-xl font-bold mb-4">Picture Details</h1>
            <div className="mb-4 flex justify-center items-center    w-40 h-40 rounded-full">
                {image ? (
                    <img src={URL.createObjectURL(image)} alt="Uploaded" className="w-20 h-20 rounded-full  " />
                ) : (
                    <img src={personDef} alt="Uploaded" className=" w-20 h-20" />
                )}
            </div>
            <div className="mb-4">
                <p className=" text-left">{name || "No name provided"}</p>
            </div>
            <div className="mb-4 items-start">
                <p className="  text-left">{title || "No title provided"}</p>
            </div>
        </div>
    );
}
