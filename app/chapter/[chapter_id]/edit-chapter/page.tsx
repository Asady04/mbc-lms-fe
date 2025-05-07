'use client';
import ChapterHeader from "./header";
import EditChapter from "./editChapter";
import { useParams } from "next/navigation";

export default function AddChapterPage() {
  const params = useParams();
  return (
    <div className="border rounded-lg shadow-md">
      <div>
        <ChapterHeader />
      </div>
      <div>
        <EditChapter chapter_id={params.chapter_id}/>
      </div>
    </div>
  );
}
