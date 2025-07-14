import HeroSearchBlock from "./components/content/hero-search-block";
import HeroVideoBlock from "./components/content/hero-video-block";
import {
  HeroSearchBlock as HeroSearchBlockType,
  HeroVideoBlock as HeroVideoBlockType,
} from "@/sanity.types";

type ContentBlock = HeroSearchBlockType | HeroVideoBlockType;

export default function RenderContentBlocks({
  blocks,
}: {
  blocks: ContentBlock[];
}) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block._type === "hero-search-block") {
          return <HeroSearchBlock key={block._type + index} block={block} />;
        }
        if (block._type === "hero-video-block") {
          return <HeroVideoBlock key={block._type + index} block={block} />;
        }
      })}
    </>
  );
}
