import { HeroSearchBlock as HeroSearchBlockType, GET_PAGE_BY_IDResult } from '@/sanity.types';
import { client } from '@/sanity/lib/client';
import { GET_PAGE_BY_ID } from '@/sanity/lib/queries';
import Image from 'next/image';

async function HeroSearchBlock({ block }: { block: HeroSearchBlockType }) {
  const pages = await Promise.all(
    (block.topPages?.topPages || []).map(async page => {
      const pageData: GET_PAGE_BY_IDResult = await client.fetch(GET_PAGE_BY_ID, {
        id: page._ref,
      });
      return pageData;
    })
  );

  return (
    <section
      className="h-[500px] bg-cover bg-center bg-no-repeat p-2 md:p-10"
      style={{
        backgroundImage: `url("${block.backgroundImage?.imageUrl})`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex h-full flex-col justify-center space-y-6 md:max-w-2xl">
          <h1>{block.heading?.heading}</h1>
          {block.heading?.subheading && <p>{block.heading?.subheading}</p>}

          <input
            type="text"
            placeholder={block.searchLabel}
            className="w-full rounded-full border-2 border-gray-300 bg-white px-4 py-2 text-lg text-black md:px-6 md:py-4 md:text-2xl"
          />

          <div className="flex flex-wrap gap-4">
            {pages?.map((page, index) => (
              <a
                key={index}
                href={'#'}
                className="bg-opacity-20 hover:bg-opacity-30 flex aspect-square max-w-[200px] flex-wrap justify-between border border-slate-500 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all"
              >
                <div className="flex justify-between gap-2">
                  <span>{page?.seo?.description}</span>
                  <Image
                    src="https://www.wisdomtree.eu/Content/images/chevron-right.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="aspect-square shrink-0 self-start rounded-full border border-white p-2"
                  />
                </div>
                <span className="w-full font-bold">Learn More</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto overflow-x-scroll rounded-lg bg-white p-4 text-slate-800 shadow-lg">
        <pre className="text-sm">{JSON.stringify(block, null, 2)}</pre>
        <hr className="my-4" />
        <pre className="text-sm">{JSON.stringify(pages, null, 2)}</pre>
      </div> */}
    </section>
  );
}

export default HeroSearchBlock;
