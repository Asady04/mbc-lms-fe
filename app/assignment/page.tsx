import { title } from "@/components/primitives";
import AssignmentHeader from "./header";
import AssignmentContent from "./contents";

export default function AssignmentPage() {
  return (
    <div className="border rounded-lg shadow-md">
      <div>
        <AssignmentHeader />
      </div>
      <div>
        <AssignmentContent />
      </div>
    </div>
  );
}
