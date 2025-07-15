import HeroSearchBlock from './components/content/hero-search-block';
import HeroVideoBlock from './components/content/hero-video-block';
import WhatsNewBlock from './components/content/whats-new-block';
import {
  HeroSearchBlock as HeroSearchBlockType,
  HeroVideoBlock as HeroVideoBlockType,
  WhatsNewBlock as WhatsNewBlockType,
} from '@/sanity.types';

type ContentBlock = HeroSearchBlockType | HeroVideoBlockType | WhatsNewBlockType;

export default function RenderContentBlocks({ blocks, language }: { blocks: ContentBlock[]; language: string }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block._type === 'hero-search-block') {
          return <HeroSearchBlock key={block._type + index} block={block} />;
        }
        if (block._type === 'hero-video-block') {
          return <HeroVideoBlock key={block._type + index} block={block} />;
        }
        if (block._type === 'whats-new-block') {
          return <WhatsNewBlock key={block._type + index} block={block} language={language} />;
        }
      })}
    </>
  );
}
