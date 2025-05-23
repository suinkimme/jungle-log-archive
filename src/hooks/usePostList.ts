import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { type Post } from '@/types/post';

export function usePostList() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const observerRef = useRef(null);

  const fetchPosts = useCallback(async (page: number) => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        'https://gyu.codingsoup.co.kr/api/logs',
        {
          params: { page },
        },
      );

      const posts: Post[] = response.data.data.logs;
      const finished = response.data.data.finished;
      setPosts(prev => [...prev, ...posts]);
      setHasMore(!finished);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoading && hasMore) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 1.0 },
    );

    const el = observerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [isLoading, hasMore]);

  return { posts, isLoading, error, observerRef };
}
