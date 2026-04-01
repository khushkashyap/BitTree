'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  SignInButton,
  SignedOut,
  SignUpButton,
  SignedIn,
  SignOutButton,
} from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const showNavbar = ['/', '/discover', '/templates', '/pricing'].includes(
    pathname,
  );

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); // scroll down → hide
      } else {
        setHidden(false); // scroll up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (!showNavbar) return null;

  return (
    <>
      <nav
        className={`
          fixed top-3 left-4 right-4 sm:top-11 sm:left-[6vw] sm:right-[6vw] z-50
          w-auto sm:w-[89vw] rounded-full bg-white shadow-lg
          transition-all duration-300 ease-in-out
          ${hidden ? '-translate-y-32 opacity-0' : 'translate-y-0 opacity-100'}
        `}
      >
        <div className="flex justify-between items-center p-3 sm:p-4 sm:px-7">
          {/* LEFT - LOGO & DESKTOP MENU */}
          <div className="flex gap-3 sm:gap-20 items-center px-1 sm:px-4 flex-1">
            <SignedOut>
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/app-logo.png"
                  width={150}
                  height={150}
                  alt="logo"
                  className="w-20 sm:w-32 h-auto"
                />
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/app-logo-2.png"
                  width={150}
                  height={150}
                  alt="logo"
                  className="w-20 sm:w-32 h-auto"
                />
              </Link>
            </SignedIn>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-1">
              <Link
                href="/templates"
                className="hover:bg-gray-200 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
              >
                <li>Templates</li>
              </Link>
              <Link
                href="/discover"
                className="hover:bg-gray-200 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
              >
                <li>Discover</li>
              </Link>
              <Link
                href="/pricing"
                className="hover:bg-gray-200 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
              >
                <li>Pricing</li>
              </Link>
            </ul>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex-shrink-0 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-900" />
            ) : (
              <Menu size={24} className="text-gray-900" />
            )}
          </button>

          {/* RIGHT - DESKTOP BUTTONS */}
          <div className="hidden md:flex gap-2 items-center flex-shrink-0">
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <button className="bg-gray-200 px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-300 transition-colors">
                  Log in
                </button>
              </SignInButton>

              <SignUpButton forceRedirectUrl="/dashboard">
                <button className="bg-gray-800 text-white px-8 py-3 font-bold rounded-full text-sm hover:bg-gray-900 transition-colors">
                  Sign up free
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <SignOutButton>
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-zinc-500 transition-all duration-300">
                  Log out
                </button>
              </SignOutButton>
              <Link href="/dashboard">
                <button className="bg-zinc-800 text-white px-6 py-3 font-bold rounded-full text-sm hover:shadow-lg hover:shadow-zinc-500 transition-all duration-300">
                  Dashboard
                </button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed top-20 left-4 right-4 md:hidden z-40 bg-white rounded-2xl shadow-lg p-4">
          <ul className="flex flex-col gap-3">
            <Link
              href="/templates"
              className="hover:bg-gray-200 px-4 py-2 rounded-lg text-sm block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </Link>
            <Link
              href="/discover"
              className="hover:bg-gray-200 px-4 py-2 rounded-lg text-sm block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Discover
            </Link>
            <Link
              href="/pricing"
              className="hover:bg-gray-200 px-4 py-2 rounded-lg text-sm block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="border-t border-gray-200 pt-3 flex flex-col gap-2">
              <SignedOut>
                <SignInButton forceRedirectUrl="/dashboard">
                  <button className="bg-gray-200 px-4 py-2 rounded-lg font-medium text-sm w-fit text-left hover:bg-gray-300 transition-colors">
                    Log in
                  </button>
                </SignInButton>

                <SignUpButton forceRedirectUrl="/dashboard">
                  <button className="bg-gray-800 text-white px-4 py-2 font-bold rounded-full text-sm w-fit text-left hover:bg-gray-900 transition-colors">
                    Sign up free
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <SignOutButton>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-sm w-fit text-left hover:bg-red-500 transition-colors">
                    Log out
                  </button>
                </SignOutButton>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <button className="bg-zinc-800 text-white px-4 py-2 font-bold rounded-full text-sm w-fit text-left hover:bg-zinc-900 transition-colors">
                    Dashboard
                  </button>
                </Link>
              </SignedIn>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}
