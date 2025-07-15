import { WhatsNewBlock as WhatsNewBlockType } from '@/sanity.types';
import { GET_POSTS_BY_LANGUAGE } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import RecentPosts from './recent-posts';

async function WhatsNewBlock({ block, language }: { block: WhatsNewBlockType; language: string }) {
  const posts = await client.fetch(GET_POSTS_BY_LANGUAGE, { language });
  return (
    <section className="bg-gray-200 px-4 py-10">
      <div className="container mx-auto">
        <RecentPosts title={block.title || ''} posts={posts} />
      </div>
    </section>
  );
}

export default WhatsNewBlock;
