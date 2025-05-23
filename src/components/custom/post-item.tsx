import { Skeleton } from '@/components/ui/skeleton';
import { type Post } from '@/types/post';

export function PostItem({ name, url, created_at, meta_info }: Post) {
  return (
    <div className="w-full max-w-[500px] h-[110px] flex gap-3">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[210px] h-[110px] flex-shrink-0 overflow-hidden"
      >
        <img
          src={meta_info.og_image}
          alt={meta_info.og_title}
          className="w-full h-full object-cover rounded-[6px]"
        />
      </a>
      <div className="w-full h-full flex flex-col justify-between gap-2 py-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold line-clamp-2">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {meta_info.og_title}
            </a>
          </h3>
          <p className="text-sm text-gray-500 line-clamp-1">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {meta_info.description}
            </a>
          </p>
        </div>
        <p className="text-xs text-gray-500">
          {created_at} · {name}
        </p>
      </div>
    </div>
  );
}

export function PostItemSkeleton() {
  return (
    <div className="w-full max-w-[500px] h-[110px] flex gap-3">
      <Skeleton className="w-[210px] h-[110px] flex-shrink-0 rounded-[6px]" />
      <div className="w-full h-full flex flex-col justify-between gap-2 py-2">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[130px]" />
        </div>
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  );
}
