'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignInButton } from '@clerk/nextjs';

export default function Home() {
  const router = useRouter();
  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };
  const [text, setText] = useState('');

  return (
    <main>
      <section className="bg-[#254f1a] min-h-[126vh] grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[5vw] gap-6">
          <h1 className="text-[#d2e823] font-extrabold text-7xl">
            Everything you are. In one, simple link in bio.
          </h1>
          <p className="text-[#d2e823] text-xl">
            Join developers using one powerful link for their online profile.
            One link to showcase everything you build and share, from projects,
            GitHub, and portfolios to resumes, blogs, and all your developer
            profiles.
          </p>
          <div className="input flex gap-2 pt-10">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-10 py-3 outline outline-offset-2 outline-[#d2e823] rounded-md"
              type="text"
              placeholder="Enter your Handle"
            />
            <button
              onClick={() => createTree()}
              className="bg-[#e9c0e9] rounded-full px-12 py-4 font-semibold"
            >
              Claim your Bittree
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[8vw]">
          <img src="home.png" alt="homepage image" />
        </div>
      </section>

      <section className="bg-[#e9c0e9] min-h-[120vh] grid grid-cols-2">
        <div className="flex items-center justify-center flex-col">
          <img src="second.png" alt="second image" />
        </div>

        <div className="flex justify-center flex-col ml-[5vw] gap-6">
          <h1 className="text-[#502274] font-extrabold text-7xl">
            Create and customize your Bittree in minutes
          </h1>
          <p className="text-[#502274] text-xl">
            Connect your GitHub, LinkedIn, Twitter (X), portfolio, blogs,
            projects, demos, and other developer profiles. Everything comes
            together in a clean developer profile page designed to showcase your
            work and presence online.
          </p>
          <div className="input flex gap-2 pt-10">
            <SignInButton>
              <button
                onClick={() => createTree()}
                className="bg-[#502274] text-white rounded-full px-10 py-4 font-semibold"
              >
                Get started for free
              </button>
            </SignInButton>
          </div>
        </div>
      </section>
      {/*
      <section className="min-h-[190vh]">
        <div>

        </div>
      </section> */}
    </main>
  );
}
