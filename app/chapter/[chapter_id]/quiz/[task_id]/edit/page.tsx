"use client";
import QuizHeader from "./header";
import EditQuiz from "./editQuiz";
import { useParams } from "next/navigation";
import Questions from "./questions";

export default function QuizPage() {
  const params = useParams();
  return (
    <div>
      <div className="border rounded-lg shadow-md">
        <div>
          <QuizHeader />
        </div>
        <div>
          <EditQuiz chapter_id={params.chapter_id} task_id={params.task_id} />
        </div>
      </div>
      <div className="border rounded-lg shadow-md mt-5">
        <Questions task_id={params.task_id}/>
      </div>
    </div>
  );
}
