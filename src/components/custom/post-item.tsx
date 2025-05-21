export function PostItem() {
  return (
    <div className="w-full max-w-[500px] h-[110px] flex gap-3">
      <div className="aspect-[3/2] flex-shrink-0">
        <div className="h-full">
          <img
            src="https://velog.velcdn.com/images/suinkim/post/525cb88a-f4ed-4eb4-978f-35e01258755e/image.png"
            alt="썸네일"
            className="h-full object-cover rounded-[6px]"
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-between gap-2 py-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold line-clamp-2">
            퇴사 이후의 선택, 크래프톤 정글 9기 합격기퇴사퇴사 이후의 선택,
            크래프톤 정글 9기 합격기퇴사퇴사 이후의 선택, 크래프톤 정글 9기
            합격기퇴사
          </h3>
          <p className="text-sm text-gray-500 line-clamp-1">
            퇴사 이후의 선택, 크래프톤 정글 9기 합격기퇴사 이후의 선택, 크래프톤
            정글 9기 합격기퇴사 이후의 선택, 크래프톤 정글 9기 합격기퇴사 이후의
            선택, 크래프톤 정글 9기 합격기퇴사 이후의 선택, 크래프톤 정글 9기
            합격기
          </p>
        </div>
        <p className="text-xs text-gray-500">2025.05.21 · 김민규</p>
      </div>
    </div>
  );
}

export function PostItemSkeleton() {
  return <div>hello world</div>;
}
