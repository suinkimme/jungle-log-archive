import { useState, useEffect } from 'react';
import axios from 'axios';
import { type Post } from '@/types/post';

export function usePostList() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          'https://gyu.codingsoup.co.kr/api/logs',
          {
            params: {
              page,
            },
          },
        );
        setPosts(response.data.data.logs);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  return { posts, isLoading, error };
}
