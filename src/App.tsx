import axios from 'axios';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

import { PostList } from '@/components/custom/post-list';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const validateFields = (field: string, value: string) => {
    if (field === 'name' && !value) {
      return '이름을 작성해주세요.';
    }

    if (field === 'url' && !value) {
      return 'URL을 작성해주세요.';
    }

    return null;
  };

  const handleSaveClick = async () => {
    setIsLoading(true);

    const nameErrorMessage = validateFields('name', name);
    const urlErrorMessage = validateFields('url', url);

    if (nameErrorMessage) {
      toast.error(nameErrorMessage);
      return;
    }

    if (urlErrorMessage) {
      toast.error(urlErrorMessage);
      return;
    }

    try {
      await axios.post('https://gyu.codingsoup.co.kr/api/logs', {
        name,
        url,
      });
      toast.success('정말 고생 많으셨습니다! 감사합니다!', {});
      setName('');
      setUrl('');
    } catch (error) {
      console.log(error);
      toast.error('문제가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full h-full">
      <Card className="w-[350px] border-none bg-transparent">
        <CardHeader>
          <CardTitle>정글 로그 아카이브</CardTitle>
          <CardDescription>
            정글 과정 5개월 동안 작성해주신 TIL은 수료할 때 하나의 대시보드로
            정리해드릴게요.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 flex flex-col gap-2">
          <div className="space-y-1 flex flex-col gap-1">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              placeholder="이름을 작성해주세요."
              value={name}
              disabled={isLoading}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="space-y-1 flex flex-col gap-1">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              placeholder="URL을 작성해주세요."
              value={url}
              disabled={isLoading}
              onChange={e => setUrl(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleSaveClick}
            disabled={isLoading || !name || !url}
          >
            남기기
          </Button>
        </CardFooter>
      </Card>
      <PostList />
    </div>
  );
}
