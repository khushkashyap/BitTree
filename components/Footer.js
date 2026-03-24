'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { SignInButton, SignUpButton, SignedOut, SignedIn } from '@clerk/nextjs';

const Footer = () => {
  const pathname = usePathname();
  const showFooter = ['/'].includes(pathname);

  return (
    <>
      {showFooter && (
        <footer className="p-4 sm:p-6 md:p-10 bg-[#502274]">
          {/* Footer Content */}
          <div className="flex flex-col sm:flex-row justify-between max-w-6xl px-4 sm:px-6 md:px-20 py-8 md:py-14 rounded-3xl mx-auto gap-6 sm:gap-8 md:gap-12 text-xs sm:text-sm md:text-base bg-white items-center md:items-center">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <SignedOut>
              <SignInButton>
                <button className="login bg-gray-200 px-4 sm:px-6 py-2 sm:py-4 rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-300 transition-colors">
                  Log in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="signup bg-gray-800 text-white px-6 sm:px-8 py-2 sm:py-4 font-bold rounded-full text-xs sm:text-sm hover:bg-gray-900 transition-colors">
                  Get Started for free
                </button>
              </SignUpButton>
              </SignedOut>
              <SignedIn>
              <Link href="/dashboard">
                <button className="bg-zinc-800 text-white px-16 py-5 font-bold rounded-full text-base hover:shadow-lg hover:shadow-zinc-500 transition-all duration-300 block mx-auto md:mx-0">
                  Dashboard
                </button>
              </Link>
            </SignedIn>
            </div>
            <div className="flex gap-3 sm:gap-4 md:gap-6 text-2xl sm:text-2xl md:text-3xl">
              <div className="bg-gray-200 px-3 sm:px-4 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-300 transition-colors cursor-pointer">
                <FaFacebookF className="hover:text-[#1877F2]" />
              </div>
              <div className="bg-gray-200 px-3 sm:px-4 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-300 transition-colors cursor-pointer">
                <FaXTwitter className="text-gray-600 hover:text-[#000000]" />
              </div>
              <div className="bg-gray-200 px-3 sm:px-4 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-300 transition-colors cursor-pointer">
                <FaLinkedinIn className="hover:text-[#0077B5]" />
              </div>
              <div className="bg-gray-200 px-3 sm:px-4 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-300 transition-colors cursor-pointer">
                <FaInstagram className="hover:text-[#C13584]" />
              </div>
            </div>
          </div>

          {/* Bittree Branding */}
          <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto h-32 sm:h-40 md:h-48 flex justify-center items-center text-[#502274] font-bold bg-[#e9c0e9] mt-8 md:mt-14 text-2xl sm:text-4xl md:text-6xl lg:text-8xl rounded-3xl px-4">
            <Image
              src="/app-logo-2.png"
              width={440}
              height={300}
              alt="logo"
              className="w-40 sm:w-56 md:w-64 h-auto"
            />
          </div>

          {/* Copyright Text */}
          <div className="flex items-center justify-center pt-6 md:pt-10 text-center text-white text-xs sm:text-sm md:text-base px-4">
            ©2026 Bittree | All rights reserved.
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
