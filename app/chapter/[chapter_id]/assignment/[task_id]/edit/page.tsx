'use client';
import AssignmentHeader from "./header";
import EditAssignment from "./editAssignment";
import { useParams } from "next/navigation";

export default function AssignmentPage() {
  const params = useParams();
  return (
    <div className="border rounded-lg shadow-md">
      <div>
        <AssignmentHeader />
      </div>
      <div>
        <EditAssignment chapter_id={params.chapter_id} task_id={params.task_id}/>
      </div>
    </div>
  );
}
