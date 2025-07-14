import {
  HeroSearchBlock as HeroSearchBlockType,
  GET_PAGE_REFERENCEResult,
} from "@/sanity.types";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { GET_PAGE_REFERENCE } from "@/sanity/lib/queries";

async function HeroSearchBlock({ block }: { block: HeroSearchBlockType }) {
  const pages = await Promise.all(
    (block.topPages?.topPages || []).map(async (page) => {
      const pageData: GET_PAGE_REFERENCEResult = await client.fetch(
        GET_PAGE_REFERENCE,
        {
          slug: page._ref,
        }
      );
      return pageData;
    })
  );

  return (
    <section>
      <h1>{block.heading?.heading}</h1>
      <Image
        src={block.backgroundImage?.imageUrl || ""}
        alt={block.heading?.heading || ""}
        width={1000}
        height={1000}
      />
      <h2>{block.searchLabel}</h2>
      <div>
        {pages?.map((page) => (
          <a key={page?._id} href={page?._id || ""}>
            {page?.title}
          </a>
        ))}
      </div>
    </section>
  );
}

export default HeroSearchBlock;
