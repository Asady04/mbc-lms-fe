'use client';
import ChapterHeader from "./header";
import AddChapter from "./addChapter";
import { useParams } from "next/navigation";

export default function AddChapterPage() {
  const params = useParams();
  return (
    <div className="border rounded-lg shadow-md">
      <div>
        <ChapterHeader />
      </div>
      <div>
        <AddChapter course_id={params.id}/>
      </div>
    </div>
  );
}
