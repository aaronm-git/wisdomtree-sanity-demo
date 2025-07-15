'use client';

import { GET_POSTS_BY_LANGUAGEResult } from '@/sanity.types';
import { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Image from 'next/image';

export default function RecentPosts({ title, posts }: { title: string; posts: GET_POSTS_BY_LANGUAGEResult }) {
  const glideRef = useRef<HTMLDivElement>(null);

  console.log(posts);

  useEffect(() => {
    if (glideRef.current && posts.length > 0) {
      const glide = new Glide(glideRef.current, {
        type: 'carousel',
        perView: 1,
        gap: 20,
        autoplay: 2000,
        hoverpause: true,
      });

      glide.mount();

      return () => {
        glide.destroy();
      };
    }
  }, [posts]);

  return (
    <div className="flex gap-4 text-slate-800">
      <h2 className="mb-4 text-2xl font-bold text-slate-800">{title}</h2>
      {/* Glide slider */}
      <div className="glide overflow-hidden" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {posts.map((post, index) => (
              <li className="glide__slide w-full" key={index}>
                <div className="flex rounded-md border border-slate-200 bg-white p-4">
                  <div className="min-h-[140px] w-1/8 shrink-0">
                    <Image
                      src={post.featuredImage?.imageUrl || ''}
                      alt={post.featuredImage?.altText || ''}
                      width={500}
                      height={500}
                      objectFit="cover"
                      className="h-full w-full rounded-md object-cover"
                    />
                  </div>
                  <div className="w-full space-y-2 p-4">
                    <h3 className="text-lg font-bold">{post.title || ''}</h3>
                    <p className="text-sm text-gray-500">{post.description || ''}</p>
                  </div>
                  <div className="flex shrink-0 items-center justify-center">
                    <a
                      href={`/blog/${post.slug?.current}`}
                      className="border border-blue-400 p-2 font-bold text-blue-400"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
