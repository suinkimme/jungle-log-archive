import { ScrollArea } from '@/components/ui/scroll-area';
import { PostItem, PostItemSkeleton } from './post-item';
import { usePostList } from '@/hooks/usePostList';

export function PostList() {
  const { posts, isLoading } = usePostList();

  return (
    <ScrollArea className="h-[600px] px-2 pr-10">
      <div className="flex flex-col gap-4 py-5">
        {posts.map((post, index) => (
          <PostItem key={`asdf-${index}`} {...post} />
        ))}
      </div>
    </ScrollArea>
  );
}
