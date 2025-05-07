import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider } from "@heroui/react";
import { useEffect, useState } from "react";
import { apiUrl } from "@/config/api";
import { useDateFormatter } from "@react-aria/i18n";
import DeleteTask from "./deleteTask";
import UpdateTask from "./updateTask";
import Link from "next/link";

interface Task {
  id: number;
  title: string;
  content: string;
  open: string;
  due: string;
  type: number;
}

export default function TaskItems(props: any) {
  const [tasks, setTasks] = useState<Task[]>([]);
  let formatter = useDateFormatter({ dateStyle: "full", timeStyle: "short" });

  const getAllTasks = async () => {
    try {
      const response = await fetch(
        `${apiUrl}api/chapters/${props.chapter_id}/tasks`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Fetched tasks:", result.data); // ✅ Log API response correctly

      setTasks(result.data); // ✅ Set only the actual tasks data
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);
  return (
    <div>
      {tasks.map((tugas, key) => (
        <div className="rounded-md border text-left p-3 mt-3" key={key}>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <Button
                isIconOnly
                size="lg"
                className="bg-gradient-to-br from-sky-500 to-sky-700"
              >
                <FontAwesomeIcon
                  className="h-7 text-white"
                  icon={tugas.type == 0 ? faFileArrowUp : faCircleCheck}
                />
              </Button>

              <div>
                <h2 className="text-medium">
                  {tugas.type == 0 ? "Assignment" : "Quiz"}
                </h2>
                {tugas.type == 0 ? (
                  <Link
                    href={`/chapter/${props.chapter_id}/assignment/${tugas.id}`}
                  >
                    <h1 className="text-lg font-semibold text-cyan-700 hover:text-cyan-800 decoration-cyan-950 hover:underline">
                      {tugas.title}
                    </h1>
                  </Link>
                ) : (
                  <Link href={`/chapter/${props.chapter_id}/quiz/${tugas.id}`}>
                    <h1 className="text-lg font-semibold text-cyan-700 hover:text-cyan-800 decoration-cyan-950 hover:underline">
                      {tugas.title}
                    </h1>
                  </Link>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <UpdateTask
                id={tugas.id}
                type={tugas.type}
                chapter_id={props.chapter_id}
              />
              <DeleteTask id={tugas.id} getAllTasks={getAllTasks} />
            </div>
          </div>
          <div className="bg-default-100 rounded-md p-5 mt-2">
            <div>
              <p className="text-default-600">
                <b>Opened:</b>
                {tugas.open
                  ? formatter.format(new Date(tugas.open)) // ✅ Convert to Date object
                  : "--"}
              </p>
              <p className="text-default-600">
                <b>Due:</b>
                {tugas.due
                  ? formatter.format(new Date(tugas.due)) // ✅ Convert to Date object
                  : "--"}
              </p>
            </div>
            <Divider className="my-2" />

            {tugas.content.length > 40 ? (
              <div
                className="text-default-600 text-left"
                dangerouslySetInnerHTML={{
                  __html: tugas.content.slice(0, 60) + "...",
                }}
              ></div>
            ) : (
              <div
                className="text-default-600 text-left"
                dangerouslySetInnerHTML={{ __html: tugas.content }}
              ></div>
            )}
          </div>
        </div>
      ))}
    </div>

    // <div className="rounded-md border text-left p-3 mt-3">
    //   <div className="flex space-x-2 items-center">
    //     <Button
    //       isIconOnly
    //       size="lg"
    //       className="bg-gradient-to-br from-sky-500 to-sky-700"
    //     >
    //       <FontAwesomeIcon
    //         className="h-7 text-white"
    //         icon={faCircleCheck}
    //       />
    //     </Button>

    //     <div>
    //       <h2 className="text-medium">Quiz</h2>
    //       <h1 className="text-lg font-semibold text-cyan-700">
    //         TA Minggu 1
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="bg-default-100 rounded-md p-5 mt-2">
    //     <div>
    //       <p className="text-default-600">
    //         <b>Opened:</b>Tuesday, 17 September 2024, 12:00 AM
    //       </p>
    //       <p className="text-default-600">
    //         <b>Due:</b>Tuesday, 17 September 2024, 13:00 AM
    //       </p>
    //     </div>
    //     <Divider className="my-2" />
    //     <div className="text-default-600">Description...</div>
    //   </div>
    // </div>
  );
}
