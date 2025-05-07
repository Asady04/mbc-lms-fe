import { title } from "@/components/primitives";
import ToDo from "./todo";
import CoursesList from "./courses";

export default function DashboardPage() {
  return (
    <div>
      <div><ToDo/></div>
      <div className="mt-10"><CoursesList/></div>
    </div>
  );
}
