'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
} from '@clerk/nextjs';

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ['/'].includes(pathname);

  return (
    <>
      {showNavbar && (
        <nav className="bg-white w-[89vw] flex justify-between fixed top-11 right-[6vw] rounded-full p-4 px-7">
          <div className="logo flex gap-20 items-center px-4">
            <Link href={'/'}>
              <Image src="/app-logo.png" width={150} height={150} alt="logo" />
            </Link>
            <ul className="flex gap-1">
              <Link className="hover:bg-gray-100 p-4 py-2 rounded-lg" href="/">
                <li>Templates</li>
              </Link>
              <Link className="hover:bg-gray-100 p-4 py-2 rounded-lg" href="/">
                <li>Marketplace</li>
              </Link>
              <Link className="hover:bg-gray-100 p-4 py-2 rounded-lg" href="/">
                <li>Discover</li>
              </Link>
              <Link className="hover:bg-gray-100 p-4 py-2 rounded-lg" href="/">
                <li>Pricing</li>
              </Link>
              <Link className="hover:bg-gray-100 p-4 py-2 rounded-lg" href="/">
                <li>Learn</li>
              </Link>
            </ul>
          </div>

          <div className="flex gap-2">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="login bg-gray-200 px-6 py-4 rounded-lg font-medium">
                  Log in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="signup bg-gray-800 text-white px-8 font-bold rounded-full">
                  Sign up free
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
