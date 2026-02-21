'use client';

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const Generate = () => {
  const searchParams = useSearchParams();

  const [links, setLinks] = useState([{ link: '', linktext: '' }]);
  const [handle, sethandle] = useState(searchParams.get('handle') || '');
  const [pic, setpic] = useState('');
  const [desc, setdesc] = useState('');

  const handleChange = (index, link, linktext) => {
    setLinks((prev) =>
      prev.map((item, i) => (i === index ? { link, linktext } : item)),
    );
  };

  const addLink = () => {
    setLinks([...links, { link: '', linktext: '' }]);
  };

  const submitLinks = async () => {
    const r = await fetch('http://localhost:3000/api/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ links, handle, pic, desc }),
    });

    const result = await r.json();
    result.success
      ? toast.success(result.message)
      : toast.error(result.message);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

      {/* LEFT FORM */}
      <div className=" relative flex w-full h-screen overflow-hidden lg:flex-row">
        <div className="w-full overflow-y-auto">
          <div className="block h-[24px] lg:h-[32px] absolute top-6 left-6 lg:top-10 z-50">
            <img src="/app-logo-2.png" className="h-12" />
          </div>
          <div className='mx-auto w-full flex-grow px-6 pb-[120px] pt-32 md:px-0 max-w-[480px]'>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Create your BitTree
            </h1>
            <p className="text-gray-500 mb-8 text-center">
              Everything you are. In one simple link.
            </p>

            {/* Handle */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">
                Claim your handle
              </label>
              <input
                value={handle}
                onChange={(e) => sethandle(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="yourname"
              />
            </div>

            {/* Links */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">
                Add your links
              </label>

              {links.map((item, index) => (
                <div key={index} className="mt-2">
                  <input
                    value={item.linktext}
                    onChange={(e) =>
                      handleChange(index, item.link, e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-lg mb-2"
                    placeholder="Link title (Instagram, GitHub)"
                  />
                  <input
                    value={item.link}
                    onChange={(e) =>
                      handleChange(index, e.target.value, item.linktext)
                    }
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="https://"
                  />
                </div>
              ))}

              <button
                onClick={addLink}
                className="mt-3 text-sm font-medium text-black hover:underline"
              >
                + Add another link
              </button>
            </div>

            {/* Profile */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Profile details
              </label>
              <input
                value={pic}
                onChange={(e) => setpic(e.target.value)}
                className="mt-2 w-full px-3 py-2 border rounded-lg mb-2"
                placeholder="Profile picture URL"
              />
              <input
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Short bio"
              />
            </div>

            <button
              disabled={!handle || !links[0].linktext}
              onClick={submitLinks}
              className="w-full py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 disabled:opacity-50"
            >
              Create BitTree
            </button>
          </div>
        </div>
      </div>
      
      {/* RIGHT PROMO */}
      <div className="hidden lg:block relative h-screen w-full overflow-hidden">
        <img
          src="/generate.png"
          alt="preview"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Generate;
