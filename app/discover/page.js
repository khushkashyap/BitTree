'use client';
import { FaBoltLightning, FaLaptop, FaAffiliatetheme, FaPaperPlane } from 'react-icons/fa6';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { PiSecurityCameraFill } from 'react-icons/pi';

export default function DiscoverPage() {
  return (
    <main className="w-full bg-black text-white overflow-hidden">
      {/* HERO SECTION - GRADIENT BG */}
      <section className="relative min-h-[126vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <div className="mb-6 inline-block">
            <span className="px-4 py-1.5 bg-purple-950 border border-purple-600/50 rounded-full text-purple-300 text-sm font-medium">
              For Developers. By Developers.
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            One Link.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Infinite Possibilities.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Your portfolio, GitHub, projects, resume, and every link developers need to know about you. One powerful link in bio.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/generate"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Create Your Link
            </a>
            <a
              href="#features"
              className="px-8 py-4 border border-gray-600 rounded-lg font-semibold text-lg hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
            >
              See Examples
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">50K+</div>
              <div className="text-gray-500 text-sm">Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">2M+</div>
              <div className="text-gray-500 text-sm">Links Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">99.9%</div>
              <div className="text-gray-500 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-black text-center mb-20">
            Built for Modern <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Developers</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaBoltLightning className="w-8 h-8" />,
                title: 'Ultra-Fast Performance',
                desc: 'Your link loads in milliseconds. No bloat, just speed.',
              },
              {
                icon: <FaAffiliatetheme className="w-8 h-8" />,
                title: 'Modern Themes',
                desc: 'Dark mode, neon, retro, and custom color schemes.',
              },
              {
                icon: <FaLaptop className="w-8 h-8" />,
                title: 'Code-First Design',
                desc: 'Easy API integration. Use it however you want.',
              },
              {
                icon: <TbBrandGoogleAnalytics className="w-8 h-8" />,
                title: 'Real Analytics',
                desc: 'Track clicks, views, and see where your traffic comes from.',
              },
              {
                icon: <PiSecurityCameraFill className="w-8 h-8" />,
                title: 'Developer Security',
                desc: 'OAuth support, API keys, and enterprise-grade encryption.',
              },
              {
                icon: <FaPaperPlane className="w-8 h-8" />,
                title: 'Dev-Friendly Tools',
                desc: 'WebHooks, CLI tools, and extensive documentation.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-950/30 hover:to-gray-950 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-6">
            What Your Link Looks Like
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Beautiful, fast, and fully customizable. No two BitTrees look the same.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Preview Card 1 */}
            <div className="border border-gray-800 rounded-2xl p-8 bg-gradient-to-b from-gray-900 to-gray-950">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">@developer</h3>
                <p className="text-gray-400 text-sm mb-6">Full Stack Developer</p>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold text-sm">
                    My Portfolio
                  </button>
                  <button className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white font-semibold text-sm hover:border-purple-500">
                    GitHub
                  </button>
                  <button className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white font-semibold text-sm hover:border-purple-500">
                    Resume
                  </button>
                  <button className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white font-semibold text-sm hover:border-purple-500">
                    Contact
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Card 2 */}
            <div className="border border-gray-800 rounded-2xl p-8 bg-gradient-to-b from-gray-900 to-gray-950">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">@techentrepreneur</h3>
                <p className="text-gray-400 text-sm mb-6">Building the future</p>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-semibold text-sm">
                    My Projects
                  </button>
                  <button className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white font-semibold text-sm hover:border-blue-500">
                    Twitter
                  </button>
                  <button className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white font-semibold text-sm hover:border-blue-500">
                    LinkedIn
                  </button>
                  <button className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white font-semibold text-sm hover:border-blue-500">
                    Newsletter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DEVELOPERS CHOOSE US */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-black text-center mb-20">
            Why Developers Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">BitTree</span>
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { num: '01', title: 'No Friction Setup', desc: 'Create your link in 30 seconds. Seriously.' },
              { num: '02', title: 'Works Everywhere', desc: 'Twitter bio, LinkedIn, Discord, emails, resumes - wherever you need it.' },
              { num: '03', title: 'Brand Yourself', desc: 'Use our themes or customize everything with your own CSS.' },
              { num: '04', title: 'Keep Control', desc: 'Own your data. Download it anytime. No lock-in.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to Share Your<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Developer Story?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Join 50K+ developers who've already made their mark with BitTree.
          </p>

          <a
            href="/generate"
            className="inline-flex px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get Your Link Now
          </a>
        </div>
      </section>
    </main>
  );
}