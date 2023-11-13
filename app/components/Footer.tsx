import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className=" items-start max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
          <h1 className="w-full text-3xl font-bold text-black leading-relaxed  flex justify-start">Hamro<span className='font-bold text-primary'>Pasal</span></h1>
          <p className="py-2 text-gray-500 mt-1 tracking-wide font-semibold">
            Experience Excellence with Every Step. Our commitment to quality, style, and innovation is reflected in every product we offer.
          </p>
          <div className="mx-auto flex md:-[60%] justify-between mt-4 ">
            <Facebook className='hover:fill-black cursor-pointer' />
            <Instagram className='hover:fill-black cursor-pointer' />
            <Github className='hover:fill-black cursor-pointer' />
            <Twitter className='hover:fill-black cursor-pointer' />
            <Linkedin className='hover:fill-black cursor-pointer' />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 w-full">
          <div >
            <h6 className="text-gray-700 font-medium cursor-pointer">Solutions</h6>
            <ul >
              <li className="py-2 text-sm text-gray-700">Analytics</li>
              <li className="py-2 text-sm text-gray-700">Marketing</li>
              <li className="py-2 text-sm text-gray-700">Commerce</li>
              <li className="py-2 text-sm text-gray-700">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="text-gray-700 font-medium cursor-pointer">Support</h6>
            <ul>
              <li className="py-2 text-sm text-gray-700">Pricing</li>
              <li className="py-2 text-sm text-gray-700">Documentation</li>
              <li className="py-2 text-sm text-gray-700">Guides</li>
              <li className="py-2 text-sm text-gray-700">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="text-gray-700 font-medium cursor-pointer">Company</h6>
            <ul>
              <li className="py-2 text-sm text-gray-700">About</li>
              <li className="py-2 text-sm text-gray-700">Blog</li>
              <li className="py-2 text-sm text-gray-700">Jobs</li>
              <li className="py-2 text-sm text-gray-700">Careers</li>
            </ul>
          </div>
          <div className="mr-2">
            <h6 className="text-gray-700 font-medium cursor-pointer">Legal</h6>
            <ul>
              <li className="py-2 text-sm text-gray-700">Claim</li>
              <li className="py-2 text-sm text-gray-700">Policy</li>
              <li className="py-2 text-sm text-gray-700">Terms</li>
              <li className="py-2 text-sm text-gray-700">Insights</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-center mb-10 text-gray-500 mt-4 cursor-pointer hover:text-primary  hover:border-black">
        Created By: Anish Chaulagain
      </h1>
    </>
  );
};
export default Footer;