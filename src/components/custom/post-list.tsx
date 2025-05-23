import { ScrollArea } from '@/components/ui/scroll-area';
import { PostItem, PostItemSkeleton } from './post-item';
import { usePostList } from '@/hooks/usePostList';

function PostListSkeleton() {
  return (
    <>
      <PostItemSkeleton />
      <PostItemSkeleton />
      <PostItemSkeleton />
      <PostItemSkeleton />
      <PostItemSkeleton />
    </>
  );
}

export function PostList() {
  const { posts, isLoading, observerRef } = usePostList();

  return (
    <ScrollArea className="w-[520px] h-[600px] px-2 pr-10">
      <div className="flex flex-col gap-4 pt-5">
        {posts.map((post, index) => (
          <PostItem key={`asdf-${index}`} {...post} />
        ))}
        {isLoading && <PostListSkeleton />}
        <div ref={observerRef} style={{ height: '1px' }} />
      </div>
    </ScrollArea>
  );
}
