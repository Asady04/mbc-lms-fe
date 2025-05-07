'use client';
import AssignmentHeader from "./header";
import AddAssignment from "./addAssignment";
import { useParams } from "next/navigation";

export default function AssignmentPage() {
  const params = useParams();
  return (
    <div className="border rounded-lg shadow-md">
      <div>
        <AssignmentHeader />
      </div>
      <div>
        <AddAssignment chapter_id={params.chapter_id}/>
      </div>
    </div>
  );
}
