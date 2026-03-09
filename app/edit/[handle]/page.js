'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChevronLeft } from 'lucide-react';

const EditPage = () => {
  const params = useParams();
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState(null);
  const [links, setLinks] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    pic: '',
    desc: '',
    template: 'minimal',
  });

  const templates = [
    { id: 'minimal', name: 'Minimal' },
    { id: 'dark', name: 'Dark Developer' },
    { id: 'gradient', name: 'Gradient Glow' },
    { id: 'code', name: 'Code Inspired' },
    { id: 'portfolio', name: 'Portfolio Pro' },
    { id: 'cyber', name: 'Cyber Punk' },
  ];

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      router.push('/sign-in');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/profile/${params.handle}`);
        const data = await response.json();

        if (!data.success) {
          if (response.status === 404) {
            toast.error('BitTree not found');
          } else if (response.status === 403) {
            toast.error('Unauthorized: You can only edit your own BitTrees');
          } else {
            toast.error(data.message || 'Failed to load profile');
          }
          router.push('/dashboard');
          return;
        }

        setProfile(data.profile);
        setFormData({
          name: data.profile.name || '',
          pic: data.profile.pic || '',
          desc: data.profile.desc || '',
          template: data.profile.template || 'minimal',
        });
        setLinks(data.profile.links || [{ link: '', linktext: '' }]);
      } catch (error) {
        toast.error('Error loading profile');
        console.error(error);
        router.push('/dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isLoaded, user, params.handle, router]);

  const handleChange = (index, link, linktext) => {
    setLinks((prev) =>
      prev.map((item, i) => (i === index ? { link, linktext } : item))
    );
  };

  const addLink = () => {
    setLinks([...links, { link: '', linktext: '' }]);
  };

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTemplateChange = (template) => {
    setFormData((prev) => ({
      ...prev,
      template,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch('/api/update', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          handle: params.handle,
          ...formData,
          links,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      } else {
        if (response.status === 403) {
          toast.error('Unauthorized: You can only edit your own BitTrees');
        } else {
          toast.error(result.message || 'Failed to save profile');
        }
      }
    } catch (error) {
      toast.error('Error saving profile');
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black flex items-center justify-center">
        <div className="text-white/60">Loading...</div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <ChevronLeft size={20} />
            Back to Dashboard
          </Link>
          <div className="text-white/70 text-sm">Editing /{profile.handle}</div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Edit /{profile.handle}
          </h1>
          <p className="text-white/60">Update your BitTree profile details</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile Section */}
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Profile Details</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Profile Picture URL
                </label>
                <input
                  type="url"
                  name="pic"
                  value={formData.pic}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Bio / Description
                </label>
                <textarea
                  name="desc"
                  value={formData.desc}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
            </div>
          </div>

          {/* Template Section */}
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Template</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {templates.map((template) => (
                <button
                  key={template.id}
                  type="button"
                  onClick={() => handleTemplateChange(template.id)}
                  className={`p-3 rounded-lg border transition-all duration-200 font-medium ${
                    formData.template === template.id
                      ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                      : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Links</h2>

            <div className="space-y-4">
              {links.map((link, index) => (
                <div key={index} className="space-y-2 p-4 rounded-lg bg-white/5 border border-white/10">
                  <input
                    type="text"
                    value={link.linktext}
                    onChange={(e) =>
                      handleChange(index, link.link, e.target.value)
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Link title (e.g., LinkedIn, GitHub)"
                  />
                  <input
                    type="url"
                    value={link.link}
                    onChange={(e) =>
                      handleChange(index, e.target.value, link.linktext)
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://..."
                  />
                  {links.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeLink(index)}
                      className="text-sm text-red-400 hover:text-red-300 transition-colors"
                    >
                      Remove link
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addLink}
                className="w-full py-3 border border-white/20 hover:border-white/30 rounded-lg text-white/70 hover:text-white transition-colors font-medium"
              >
                + Add Another Link
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => router.push('/dashboard')}
              className="flex-1 px-6 py-3 border border-white/20 rounded-xl text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default EditPage;
