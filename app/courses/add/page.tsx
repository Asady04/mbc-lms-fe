import { Button } from "@heroui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import AddCourse from "./addCourse";

export default function CoursesPage() {
  return (
    <div>
      <div className="w-full shadow">
        <div className="flex flex-row p-3 mt-3 items-center">
          <Button
            isIconOnly
            size="lg"
            className="bg-gradient-to-br from-sky-500 to-sky-700"
          >
            <FontAwesomeIcon className="h-7 text-white" icon={faBook} />
          </Button>

          <div className="pl-3 text-left">
            <h1 className="font-semibold text-3xl">Add Course</h1>
          </div>
        </div>
        <div className="mt-5">
          <AddCourse />
        </div>
      </div>
    </div>
  );
}
