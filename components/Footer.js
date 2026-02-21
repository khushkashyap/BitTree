'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { SignInButton, SignUpButton } from '@clerk/nextjs';

const Footer = () => {
  const pathname = usePathname();
  const showFooter = ['/'].includes(pathname);

  return (
    <>
      {showFooter && (
        <footer className="p-10 bg-[#502274]">
          {/* Footer Content */}
          <div className="flex justify-between max-w-6xl px-6 sm:px-10 lg:px-20 py-14 rounded-3xl mx-auto gap-12 text-sm md:text-base bg-white items-center">
            <div className="flex gap-2">
              <SignInButton>
                <button className="login bg-gray-200 px-6 py-4 rounded-lg font-medium">
                  Log in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="signup bg-gray-800 text-white px-8 font-bold rounded-full">
                  Get Started for free
                </button>
              </SignUpButton>
            </div>
            <div className="flex space-x-6 text-3xl">
              <div className="bg-gray-200 px-4 py-4 rounded-full font-medium">
                <FaFacebookF className="hover:text-[#1877F2] cursor-pointer" />
              </div>
              <div className="bg-gray-200 px-4 py-4 rounded-full font-medium">
                <FaXTwitter className="text-gray-600 hover:text-[#000000] cursor-pointer" />
              </div>
              <div className="bg-gray-200 px-4 py-4 rounded-full font-medium">
                <FaLinkedinIn className="hover:text-[#0077B5] cursor-pointer" />
              </div>
              <div className="bg-gray-200 px-4 py-4 rounded-full font-medium">
                <FaInstagram className="hover:text-[#C13584] cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Bittree Branding */}
          <div className="w-[90%] md:w-[80%] mx-auto h-40 flex justify-center items-center text-[#502274] font-bold bg-[#e9c0e9] mt-14 text-4xl md:text-6xl lg:text-8xl rounded-3xl">
            <Image src="/app-logo-2.png" width={440} height={300} alt="logo" />
          </div>

          {/* Copyright Text */}
          <div className="flex items-center justify-center pt-10 text-center text-white text-sm md:text-base">
            ©2026 Bittree | All rights reserved.
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
