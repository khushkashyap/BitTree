'use client';

import { useEffect } from 'react';
import { ExternalLink, Mail, Github, Linkedin, Twitter, Youtube, Globe } from 'lucide-react';

// Add animation styles
const animationStyles = `
  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 15px rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
    }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradientMove 12s ease infinite;
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out;
  }

  .glow-effect {
    animation: glowPulse 3s ease-in-out infinite;
  }
`;

// Map common social platforms to icons
const getSocialIcon = (linkText) => {
  const text = linkText.toLowerCase();
  if (text.includes('github')) return <Github className="w-5 h-5" />;
  if (text.includes('linkedin')) return <Linkedin className="w-5 h-5" />;
  if (text.includes('twitter') || text.includes('x.com')) return <Twitter className="w-5 h-5" />;
  if (text.includes('youtube')) return <Youtube className="w-5 h-5" />;
  if (text.includes('email') || text.includes('mail')) return <Mail className="w-5 h-5" />;
  if (text.includes('website') || text.includes('portfolio')) return <Globe className="w-5 h-5" />;
  return <ExternalLink className="w-5 h-5" />;
};

export default function BaseTemplate({ user, className = "" }) {
  if (!user) return null;

  const { handle, pic, desc, links } = user;

  // Separate social links from regular links (heuristic: detect common social platforms)
  const socialKeywords = ['github', 'linkedin', 'twitter', 'youtube', 'email', 'mail', 'website', 'portfolio', 'instagram'];
  const socialLinks = links?.filter(link =>
    socialKeywords.some(keyword => link.linktext.toLowerCase().includes(keyword))
  ) || [];

  const mainLinks = links?.filter(link =>
    !socialKeywords.some(keyword => link.linktext.toLowerCase().includes(keyword))
  ) || [];

  // Gradient backgrounds for different templates
  const gradientMap = {
    'bg-white text-black': 'from-blue-300 to-blue-600',
    'bg-zinc-950 text-white': 'from-slate-700 to-slate-900',
    'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white': 'from-purple-500 via-pink-400 to-red-500',
    'bg-black text-green-400 font-mono': 'from-green-900 to-black',
    'bg-slate-100 text-slate-900': 'from-amber-300 to-orange-600',
    'bg-black text-pink-500': 'from-pink-600 to-purple-900',
  };

  const backgroundGradient = gradientMap[className] || 'from-sky-400 to-blue-600';

  return (
    <>
      <style>{animationStyles}</style>
      <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} animate-gradient flex flex-col items-center justify-center px-4 py-8 sm:py-12 relative overflow-hidden`}>
      {/* Background blur effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Main Card Container */}
      <div className="relative w-full max-w-[420px] rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 sm:p-10 shadow-2xl animate-fade-in-up glow-effect transition-all duration-300 hover:bg-white/[0.12] hover:border-white/30">

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-8">
          {/* Avatar */}
          <div className="mb-6 relative">
            {pic ? (
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: 'scale(1.15)' }} />
                <img
                  src={pic}
                  alt={handle}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-white/40 shadow-lg hover:ring-white/60 hover:shadow-xl hover:scale-105 transition-all duration-300"
                />
              </div>
            ) : (
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-white/20 to-white/5 ring-4 ring-white/40 flex items-center justify-center hover:ring-white/60 hover:scale-105 transition-all duration-300 shadow-lg">
                <span className="text-3xl font-bold text-white/40">
                  {handle?.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>

          {/* Username */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            @{handle}
          </h1>

          {/* Bio */}
          {desc && (
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xs">
              {desc}
            </p>
          )}
        </div>

        {/* Social Icons Row */}
        {socialLinks.length > 0 && (
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={`social-${index}`}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 border border-white/30 text-white hover:bg-white/35 hover:border-white/50 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                title={link.linktext}
              >
                {getSocialIcon(link.linktext)}
              </a>
            ))}
          </div>
        )}

        {/* Links Section */}
        <div className="space-y-3 sm:space-y-4">
          {(mainLinks.length > 0 ? mainLinks : links)?.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-full backdrop-blur-sm bg-white/15 border border-white/30 px-5 sm:px-6 py-4 transition-all duration-300 hover:bg-white/25 hover:border-white/50 hover:scale-[1.03] cursor-pointer hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-white font-medium text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
                  {item.linktext}
                </span>
                <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors flex-shrink-0 duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer Text */}
        {links && links.length > 0 && (
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-white/50">
              Made with BitTree
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}