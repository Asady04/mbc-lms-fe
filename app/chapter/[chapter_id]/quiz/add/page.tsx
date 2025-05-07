'use client';
import AssignmentHeader from "./header";
import AddQuiz from "./addQuiz";
import { useParams } from "next/navigation";

export default function AssignmentPage() {
  const params = useParams();
  return (
    <div className="border rounded-lg shadow-md">
      <div>
        <AssignmentHeader />
      </div>
      <div>
        <AddQuiz chapter_id={params.chapter_id}/>
      </div>
    </div>
  );
}
