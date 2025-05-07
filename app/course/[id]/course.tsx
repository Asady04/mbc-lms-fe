import { faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionItem, Button, Divider, Link } from "@heroui/react";
import { useEffect, useState } from "react";
import { apiUrl } from "@/config/api";
import UpdateChapter from "./updateChapter";
import DeleteChapter from "./deleteChapter";
import AddTask from "./addTask";
import TaskItems from "./task";

interface Chapter {
  id: number;
  title: string;
  content: string;
}

export default function CourseItems(props: any) {
  const [chapters, setchapters] = useState<Chapter[]>([]);

  const getAllChapters = async () => {
    try {
      const response = await fetch(`${apiUrl}api/courses/${props.id}/chapters`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Fetched chapters:", result.data); // ✅ Log API response correctly

      setchapters(result.data); // ✅ Set only the actual chapters data
    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };

  useEffect(() => {
    getAllChapters();
  }, []);
  return (
    <>
      <div className="space-y-2">
        {/* Admin Feature */}
        <div className="justify-start flex pl-2">
          <Link
            className="text-white"
            size="sm"
            href={`/course/${props.id}/add-chapter`}
          >
            <Button
              color="primary"
              className="dark:text-default-50"
              endContent={<FontAwesomeIcon icon={faPlus} />}
            >
              Add Chapter
            </Button>
          </Link>
        </div>

        <Accordion variant="splitted" selectionMode="multiple">
          <AccordionItem
            key="description"
            aria-label="Accordion 1"
            title={<p className="font-bold text-cyan-800">Description</p>}
          >
            <div className="p-3">
              <div
                className="text-left text-default-500"
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></div>
            </div>
          </AccordionItem>
        </Accordion>
        <Accordion variant="splitted" selectionMode="multiple">
          {chapters.map((materi, key) => (
            <AccordionItem
              key={key.toString()}
              aria-label="Accordion 1"
              title={<p className="font-bold text-cyan-800">{materi.title}</p>}
            >
              <div>
                {/* Admin Feature */}
                <div className="flex justify-start space-x-2 pl-2">
                  <AddTask
                    chapter_id={materi.id}
                    getAllChapters={getAllChapters}
                  />
                  <UpdateChapter
                    id={materi.id}
                    getAllChapters={getAllChapters}
                  />
                  <DeleteChapter
                    id={materi.id}
                    getAllChapters={getAllChapters}
                  />
                </div>
              </div>
              <div className="p-3">
                <div
                  className="text-left text-default-500"
                  dangerouslySetInnerHTML={{ __html: materi.content }}
                ></div>
                {/* Tasks Section */}
                <TaskItems chapter_id={materi.id} />
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
