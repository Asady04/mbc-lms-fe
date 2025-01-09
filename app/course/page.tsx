import { title } from "@/components/primitives";
import CourseHeader from "./header";
import CourseContents from "./contents";

export default function CoursePage() {
  return (
    <div>
      <div>
        <CourseHeader />
      </div>
      <div className="mt-5">
        <CourseContents />
      </div>
    </div>
  );
}
