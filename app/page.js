'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignInButton, useAuth } from '@clerk/nextjs';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [text, setText] = useState('');

  const createTree = () => {
    if (!isSignedIn) {
      // Don't navigate if not signed in - let SignInButton handle it
      return;
    }
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-[#254f1a] min-h-screen lg:min-h-[126vh] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 py-10 lg:py-0">
        <div className="flex justify-center flex-col px-4 sm:px-6 lg:ml-[5vw] gap-4 sm:gap-5 lg:gap-6 pt-20 sm:pt-24 lg:pt-0">
          <div className="mb-2 inline-block w-fit mx-auto lg:mx-0">
            <span className="px-3 sm:px-4 py-1.5 bg-green-700 border border-green-600/50 rounded-full text-[#d2e823] text-xs sm:text-sm font-medium">
              For Developers. By Developers.
            </span>
          </div>
          <h1 className="text-[#d2e823] font-extrabold text-3xl sm:text-4xl lg:text-7xl leading-tight text-center lg:text-left">
            Everything you are. In one, simple link in bio.
          </h1>
          <p className="text-[#d2e823] text-sm sm:text-base lg:text-xl leading-relaxed text-center lg:text-left">
            Join developers using one powerful link for their online profile.
            One link to showcase everything you build and share, from projects,
            GitHub, and portfolios to resumes, blogs, and all your developer
            profiles.
          </p>
          <div className="input flex flex-col sm:flex-row gap-2 sm:gap-3 pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-0">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-4 sm:px-6 lg:px-12 py-2 outline outline-offset-2 outline-[#d2e823] rounded-md text-sm sm:text-base flex-grow sm:flex-grow-0"
              type="text"
              placeholder="Enter your Handle"
            />
            {isSignedIn ? (
              <button
                onClick={() => createTree()}
                className="bg-[#e9c0e9] rounded-full px-6 sm:px-12 lg:px-16 py-2 sm:py-3 lg:py-4 font-semibold text-xs sm:text-base whitespace-nowrap"
              >
                Create your Bittree
              </button>
            ) : (
              <SignInButton forceRedirectUrl={`/generate?handle=${text}`}>
                <button className="bg-[#e9c0e9] rounded-full px-6 sm:px-12 lg:px-16 py-2 sm:py-3 lg:py-4 font-semibold text-xs sm:text-base whitespace-nowrap">
                  Create your Bittree
                </button>
              </SignInButton>
            )}
          </div>
        </div>

        {/* HERO IMAGE - RESPONSIVE */}
        <div className="flex items-center justify-center flex-col px-4 sm:px-6 lg:mr-[8vw] py-8 lg:py-0">
          <Image
            src="/home.png"
            alt="homepage image"
            width={400}
            height={400}
            loading='eager'
            className="w-full max-w-xs sm:max-w-sm lg:max-w-lg h-auto"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-[#e9c0e9] min-h-screen lg:min-h-[120vh] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 py-12 lg:py-0">
        <div className="flex items-center justify-center flex-col px-4 sm:px-6 py-8 lg:py-0 order-2 lg:order-1">
          <Image
            src="/second.png"
            alt="second image"
            width={400}
            height={400}
            className="w-full max-w-xs sm:max-w-sm lg:max-w-lg h-auto"
          />
        </div>

        <div className="flex justify-center flex-col px-4 sm:px-6 lg:ml-[5vw] gap-4 sm:gap-5 lg:gap-6 py-8 lg:py-0 order-1 lg:order-2">
          <h1 className="text-[#502274] font-extrabold text-3xl sm:text-4xl lg:text-7xl leading-tight text-center lg:text-left">
            Create and customize your Bittree in minutes
          </h1>
          <p className="text-[#502274] text-sm sm:text-base lg:text-xl leading-relaxed text-center lg:text-left">
            Connect your GitHub, LinkedIn, Twitter (X), portfolio, blogs,
            projects, demos, and other developer profiles. Everything comes
            together in a clean developer profile page designed to showcase your
            work and presence online.
          </p>
          <div className="input flex gap-2 pt-4 sm:pt-6 lg:pt-10 justify-center lg:justify-start">
            <SignInButton forceRedirectUrl="/dashboard">
              <button className="bg-[#502274] text-white rounded-full px-6 sm:px-10 py-2 sm:py-3 lg:py-4 font-semibold text-xs sm:text-base hover:bg-[#3d1a5a] transition-colors">
                Get started for free
              </button>
            </SignInButton>
          </div>
        </div>
      </section>
    </main>
  );
}
