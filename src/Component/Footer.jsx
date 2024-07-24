import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        // <footer className="bg-[#020305] text-white py-4">
        <div className="container mx-auto px-4 border-t-2 border-[#1400c8] bg-[#020305] py-4 ">
            <div className="flex justify-center space-x-6 mb-4 ">
                <FaFacebookF className="hover:cursor-pointer" />
                <FaInstagram className="hover:cursor-pointer" />
                <FaTwitter className="hover:cursor-pointer" />
                <FaLinkedinIn className="hover:cursor-pointer" />

            </div>
            <div className="text-center mb-4">
                <h2 className="text-2xl font-bold">QUAD SOLUTION INC.</h2>
                <p>Copyright © 2024 Quad Solution Inc.</p>
            </div>
            <div className="flex justify-center space-x-4 text-sm">
                <a href="#" className="hover:underline ">
                    Legal Stuff
                </a>
                <a href="#" className="hover:underline ">
                    Privacy Policy
                </a>
                <a href="#" className="hover:underline ">
                    Security
                </a>
                <a href="#" className="hover:underline ">
                    Website Accessibility
                </a>
                <a href="#" className="hover:underline ">
                    Manage Cookies
                </a>
            </div>
        </div>
    );
    {/* </footer> */ }
}
