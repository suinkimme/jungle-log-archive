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
  return (
    <Card className="border-none bg-transparent">
      <CardHeader>
        <CardTitle>정글 로그 아카이브</CardTitle>
        <CardDescription>
          5개월 간의 기록을 대시보드로 보여드립니다. 대시보드는 정글 과정5개월
          동안 작성해주신 TIL은 수료할 때 하나의 대시보드로 정리해드릴게요.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col gap-2">
        <div className="space-y-1 flex flex-col gap-1">
          <Label htmlFor="name">이름</Label>
          <Input id="name" placeholder="이름을 작성해주세요." />
        </div>
        <div className="space-y-1 flex flex-col gap-1">
          <Label htmlFor="url">URL</Label>
          <Input id="url" placeholder="URL을 작성해주세요." />
        </div>
      </CardContent>
      <CardFooter>
        <Button>남기기</Button>
      </CardFooter>
    </Card>
  );
}
