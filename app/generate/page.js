'use client';

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useUser, useAuth } from '@clerk/nextjs';
import { TemplatePreviewCard } from '@/components/TemplatePreview';

const Generate = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const [links, setLinks] = useState([{ link: '', linktext: '' }]);
  const [handle, sethandle] = useState(searchParams.get('handle') || '');
  const [pic, setpic] = useState('');
  const [desc, setdesc] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('minimal');

  // Redirect to sign-in if not authenticated
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/');
    }
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    const templateFromUrl = searchParams.get('template');

    if (templateFromUrl) {
      setSelectedTemplate(templateFromUrl);
    }
  }, [searchParams]);

  const templates = [
    { id: 'minimal', name: 'Minimal' },
    { id: 'dark', name: 'Dark Developer' },
    { id: 'gradient', name: 'Gradient Glow' },
    { id: 'code', name: 'Code Inspired' },
    { id: 'portfolio', name: 'Portfolio Pro' },
    { id: 'cyber', name: 'Cyber Punk' },
  ];

  const handleChange = (index, link, linktext) => {
    setLinks((prev) =>
      prev.map((item, i) => (i === index ? { link, linktext } : item)),
    );
  };

  const addLink = () => {
    setLinks([...links, { link: '', linktext: '' }]);
  };

  const submitLinks = async () => {
    const currentHandle = handle; // store before reset

    try {
      const r = await fetch('http://localhost:3000/api/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          links,
          handle,
          pic,
          desc,
          template: selectedTemplate,
          userId: user?.id,
        }),
      });

      if (!r.ok) {
        throw new Error(`HTTP error! status: ${r.status}`);
      }

      const result = await r.json();

      if (result.success) {
        toast.success(result.message);

        // Reset form
        sethandle('');
        setpic('');
        setdesc('');
        setLinks([{ link: '', linktext: '' }]);
        setSelectedTemplate('minimal');

        // Redirect
        router.push(`/${currentHandle.toLowerCase()}`);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error submitting links:', error);
      toast.error('Failed to save your BitTree. Please try again.');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* LEFT FORM */}
      <div className="relative flex w-full min-h-screen lg:h-screen overflow-hidden lg:flex-row">
        <div className="w-full overflow-y-auto bg-white">
          <div className="block h-6 lg:h-8 absolute top-4 sm:top-6 lg:top-10 left-4 sm:left-6 lg:left-6 z-50">
            <Link href={'/'}>
              <Image src="/app-logo-2.png" width={48} height={48} alt="logo" className="h-8 sm:h-10 lg:h-12 w-auto" />
            </Link>
          </div>
          <div className="mx-auto w-full flex-grow px-4 sm:px-6 pb-20 md:pb-[120px] pt-20 sm:pt-24 md:pt-32 lg:px-0 max-w-[480px]">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
              Create your BitTree
            </h1>
            <p className="text-gray-500 mb-6 sm:mb-8 text-center text-sm sm:text-base">
              Everything you are. In one simple link.
            </p>

            {/* Template Selection */}
            <div className="mb-6">
              <label className="text-xs sm:text-sm font-medium text-gray-700">
                Choose a template
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-3 mt-2">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`cursor-pointer border rounded-lg p-2 sm:p-3 text-center transition-all text-xs sm:text-sm
          ${
            selectedTemplate === template.id
              ? 'border-black bg-gray-100'
              : 'border-gray-300 hover:border-black'
          }`}
                  >
                    {template.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Handle */}
            <div className="mb-4">
              <label className="text-xs sm:text-sm font-medium text-gray-700">
                Claim your handle
              </label>
              <input
                value={handle}
                onChange={(e) => sethandle(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none text-sm"
                placeholder="yourname"
              />
            </div>

            {/* Links */}
            <div className="mb-4">
              <label className="text-xs sm:text-sm font-medium text-gray-700">
                Add your links
              </label>

              {links.map((item, index) => (
                <div key={index} className="mt-2">
                  <input
                    value={item.linktext}
                    onChange={(e) =>
                      handleChange(index, item.link, e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-lg mb-2 text-sm"
                    placeholder="Link title (e.g. LinkedIn, GitHub)"
                  />
                  <input
                    value={item.link}
                    onChange={(e) =>
                      handleChange(index, e.target.value, item.linktext)
                    }
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="https://"
                  />
                </div>
              ))}

              <button
                onClick={addLink}
                className="mt-3 text-xs sm:text-sm font-medium text-black hover:underline"
              >
                + Add another link
              </button>
            </div>

            {/* Profile */}
            <div className="mb-6">
              <label className="text-xs sm:text-sm font-medium text-gray-700">
                Profile details
              </label>
              <input
                value={pic}
                onChange={(e) => setpic(e.target.value)}
                className="mt-2 w-full px-3 py-2 border rounded-lg mb-2 text-sm"
                placeholder="Profile picture URL"
              />
              <input
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm"
                placeholder="Short bio"
              />
            </div>

            <button
              disabled={!handle || !links[0].linktext}
              onClick={submitLinks}
              className="w-full py-2 sm:py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 disabled:opacity-50 text-sm sm:text-base transition-colors"
            >
              Create BitTree
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT PROMO/PREVIEW */}
      <div className="hidden lg:block relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 p-8">
        <div className="h-full w-full flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900">Live Preview</h3>
            <p className="text-sm text-gray-600">Selected: {templates.find(t => t.id === selectedTemplate)?.name}</p>
          </div>
          <div className="flex-1 overflow-hidden border border-gray-200 rounded-2xl bg-white shadow-lg">
            <TemplatePreviewCard templateId={selectedTemplate} size="large" />
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Generate;
