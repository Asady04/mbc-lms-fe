import { title } from "@/components/primitives";
import CoursesTable from "./table";

export default function CoursesPage() {
  return (
    <div>
       <div className="w-full">
      {/* <h1 className={title()}></h1> */}
      <div className="mt-5">
        <CoursesTable />
      </div>
    </div>
    </div>
  );
}
