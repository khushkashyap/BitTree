'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SignInButton, SignedOut, SignUpButton, SignedIn } from '@clerk/nextjs';

export default function Navbar() {
  const pathname = usePathname();
  const showNavbar = ['/', '/discover', '/templates', '/pricing'].includes(
    pathname,
  );

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <nav
      className={`
        fixed top-11 right-[6vw] z-50
        w-[89vw] rounded-full bg-white shadow-lg
        transition-all duration-300 ease-in-out
        ${hidden ? '-translate-y-32 opacity-0' : 'translate-y-0 opacity-100'}
      `}
    >
      <div className="flex justify-between items-center p-4 px-7">
        {/* LEFT */}
        <div className="flex gap-20 items-center px-4">
          <SignedOut>
            <Link href="/">
              <Image
                src="/app-logo.png"
                width={150}
                height={150}
                style={{ width: 'auto', height: 'auto' }}
                alt="logo"
              />
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">
              <Image
                src="/app-logo.png"
                width={150}
                height={150}
                style={{ width: 'auto', height: 'auto' }}
                alt="logo"
              />
            </Link>
          </SignedIn>

          <ul className="flex gap-1">
            <Link
              href="/templates"
              className="hover:bg-gray-200 p-4 py-2 rounded-lg"
            >
              <li>Templates</li>
            </Link>
            <Link
              href="/discover"
              className="hover:bg-gray-200 p-4 py-2 rounded-lg"
            >
              <li>Discover</li>
            </Link>
            <Link
              href="/pricing"
              className="hover:bg-gray-200 p-4 py-2 rounded-lg"
            >
              <li>Pricing</li>
            </Link>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex gap-2 items-center">
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <button className="bg-gray-200 px-6 py-3 rounded-lg font-medium">
                Log in
              </button>
            </SignInButton>

            <SignUpButton forceRedirectUrl="/dashboard">
              <button className="bg-gray-800 text-white px-8 py-3 font-bold rounded-full">
                Sign up free
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard">
              <button className="bg-zinc-800 text-white px-6 py-3 font-bold rounded-full hover:shadow-lg hover:shadow-zinc-500 transition-all duration-300">
                Dashboard
              </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
