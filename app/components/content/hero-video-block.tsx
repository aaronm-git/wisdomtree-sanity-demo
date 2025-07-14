import { HeroVideoBlock as HeroVideoBlockType } from "@/sanity.types";
import Image from "next/image";

function HeroVideoBlock({ block }: { block: HeroVideoBlockType }) {
  return (
    <section>
      <h1>{block.heading?.heading}</h1>
      {block.videoUrl?.thumbnailUrl && (
        <Image
          src={block.videoUrl?.thumbnailUrl || ""}
          alt={block.heading?.heading || ""}
          width={1000}
          height={1000}
        />
      )}
      <video src={block.videoUrl?.videoUrl} />
    </section>
  );
}

export default HeroVideoBlock;
