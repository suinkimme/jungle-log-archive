import { ScrollArea } from '@/components/ui/scroll-area';
import { PostItem, PostItemSkeleton } from './post-item';

export function PostList() {
  return (
    <ScrollArea className="h-[600px] px-2 pr-10">
      <div className="flex flex-col gap-4 py-5">
        <PostItemSkeleton />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </ScrollArea>
  );
}
