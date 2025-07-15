'use client';
import { HeroVideoBlock as HeroVideoBlockType } from '@/sanity.types';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useState } from 'react';

function HeroVideoBlock({ block }: { block: HeroVideoBlockType }) {
  const style = {
    backgroundImage: `url(${block.backgroundImage?.imageUrl})`,
  };
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <section style={style} className="min-h-[500px] bg-cover bg-center py-12">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-1/2 px-12">
          <h1>{block.heading?.heading}</h1>
        </div>
        <div className="w-1/2">
          {!isPlaying && block.videoUrl?.thumbnailUrl && (
            <div className="h-full w-full cursor-pointer" onClick={() => setIsPlaying(true)}>
              <Image
                src={block.videoUrl?.thumbnailUrl || ''}
                alt={block.heading?.heading || ''}
                width={800}
                height={800}
                className="rounded-md"
              />
            </div>
          )}
          <div className={`h-full w-full ${isPlaying ? 'block' : 'hidden'}`}>
            <video src={block.videoUrl?.videoUrl} className="rounded-md" controls ref={videoRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroVideoBlock;
