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

export default function App() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSaveClick = async () => {
    const response = await axios.post('https://3.35.243.7:5000/api/logs', {
      name,
      url,
    });

    console.log(response);
  };

  return (
    <Card className="border-none bg-transparent">
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
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="space-y-1 flex flex-col gap-1">
          <Label htmlFor="url">URL</Label>
          <Input
            id="url"
            placeholder="URL을 작성해주세요."
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSaveClick}>남기기</Button>
      </CardFooter>
    </Card>
  );
}
