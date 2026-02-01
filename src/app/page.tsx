import { getAllPosts } from '@/lib/api';
import PostCard from '@/components/blog/PostCard';
import WaveDivider from '@/components/ui/WaveDivider';
import PhoneMockup from '@/components/ui/PhoneMockup';
import Link from 'next/link';
import { Zap, Shield, Search } from 'lucide-react';

export const revalidate = 60;

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 1. Hero Section (Gradient + Mockup) */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-gradient-to-br from-[#6227F8] via-[#8B5CF6] to-[#EC4899] text-white">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold border border-white/20 animate-in fade-in slide-in-from-bottom-3 duration-500 shadow-lg">
                v2.0 Available Now
              </span>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] drop-shadow-2xl">
                The Ultimate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500">
                  Headless CMS
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-xl leading-relaxed drop-shadow-md font-medium">
                Experience the power of WordPress with the speed of Next.js.
                Premium features, unlimited customization, and blazing fast performance.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#FE7A15] to-[#FF9E5E] rounded-full font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:-translate-y-1 flex items-center gap-2 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-[-2px] transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                  Get Started
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full font-bold hover:bg-white/20 transition-all">
                  View Features
                </button>
              </div>

              <div className="pt-8 flex items-center gap-4 text-sm font-medium text-white/80">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[#6227F8]" />
                  ))}
                </div>
                <p>Trusted by 10,000+ Developers</p>
              </div>
            </div>

            {/* 3D Mockup */}
            <div className="relative hidden lg:block perspective-1000">
              {/* Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-purple-500/30 rounded-full blur-3xl -z-10" />

              <div className="transform rotate-y-12 rotate-z-6 hover:rotate-0 transition-transform duration-700 ease-out animate-float">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <WaveDivider />
      </section>

      {/* 2. Feature Grid (Icons) */}
      <section className="py-20 container mx-auto px-6 relative z-10 -mt-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Blazing Fast', icon: <Zap className="w-8 h-8 text-[#6227F8]" />, desc: 'Optimized for speed with Next.js static generation.' },
            { title: 'Secure Core', icon: <Shield className="w-8 h-8 text-[#6227F8]" />, desc: 'Enterprise-grade security with headless architecture.' },
            { title: 'SEO Ready', icon: <Search className="w-8 h-8 text-[#6227F8]" />, desc: 'Built-in meta tags and sitemap generation.' }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl shadow-purple-900/5 hover:-translate-y-2 transition-transform duration-300 ring-1 ring-gray-900/5">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. App Info / Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6227F8] font-bold tracking-wider uppercase text-sm">Update Log</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Latest Versions & Updates</h2>
            <div className="h-1 w-20 bg-[#6227F8] mx-auto rounded-full" />
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-500">No content found. Please check your WordPress connection.</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <Link href="/blog" className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 rounded-full text-base font-medium text-gray-600 hover:text-[#6227F8] hover:border-[#6227F8] transition-colors">
              View Full Archive
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
