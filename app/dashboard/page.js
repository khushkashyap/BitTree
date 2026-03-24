export const runtime = 'nodejs';

import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import clientPromise from '@/lib/mongodb';
import { Eye, Edit2, Trash2, Plus } from 'lucide-react';
import DeleteBitTreeButton from '@/components/DeleteBitTreeButton';

async function getMyBitTrees(userId) {
  const client = await clientPromise;
  const db = client.db('bittree');
  const collection = db.collection('links');

  const profiles = await collection.find({ userId }).toArray();
  return JSON.parse(JSON.stringify(profiles));
}

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const profiles = await getMyBitTrees(userId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/app-logo-2.png" alt="BitTree" width={32} height={32} className="h-6 sm:h-8 w-auto" />
          </Link>
          <div className="text-white/70 text-xs sm:text-sm hidden sm:block">My BitTrees</div>
          <UserButton />
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back to site link */}
        <div className="mb-6 sm:mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium flex items-center gap-1 transition-colors">
            ← Back to site
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">
              My BitTrees
            </h1>
            <p className="text-white/60 text-xs sm:text-sm md:text-base">Manage and organize your link profiles</p>
          </div>
          <Link
            href="/generate"
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-xs sm:text-sm whitespace-nowrap"
          >
            <Plus size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Create New</span>
            <span className="sm:hidden">Create</span>
          </Link>
        </div>

        {/* BitTrees Grid */}
        {profiles.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white/5 border border-white/10">
                <Plus size={24} className="sm:w-8 sm:h-8 text-white/40" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              No BitTrees yet
            </h3>
            <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">
              Create your first BitTree to get started
            </p>
            <Link
              href="/generate"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-xs sm:text-sm"
            >
              <Plus size={16} className="sm:w-5 sm:h-5" />
              Create BitTree
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {profiles.map((profile) => (
              <div
                key={profile._id.toString()}
                className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-4 sm:p-6 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden relative"
              >
                {/* Gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white truncate">
                      /{profile.handle}
                    </h3>
                    <p className="text-white/60 text-sm truncate">
                      {profile.name || profile.pic ? profile.pic : 'No description'}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mb-6 pb-6 border-b border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Links:</span>
                      <span className="text-white font-semibold">
                        {profile.links?.length || 0}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Template:</span>
                      <span className="text-white font-semibold capitalize">
                        {profile.template || 'Minimal'}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link
                      href={`/${profile.handle}`}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg text-white text-sm font-medium transition-all duration-200"
                    >
                      <Eye size={16} />
                      View
                    </Link>
                    <Link
                      href={`/edit/${profile.handle}`}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/30 hover:border-blue-400/50 rounded-lg text-blue-300 hover:text-blue-200 text-sm font-medium transition-all duration-200"
                    >
                      <Edit2 size={16} />
                      Edit
                    </Link>
                    <DeleteBitTreeButton handle={profile.handle} />
                  </div>

                  {/* View Link */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a
                      href={`/${profile.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:text-blue-300 break-all"
                    >
                      bittree.app/{profile.handle}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
