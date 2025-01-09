import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionItem, Button, Divider } from "@nextui-org/react";

export default function CourseItems() {
  const materials = [
    {
      title: "Materi 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Materi 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Materi 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <Accordion variant="splitted" selectionMode="multiple">
      {materials.map((materi, key) => (
        <AccordionItem 
          key={key}
          aria-label="Accordion 1"
          title={<p className="font-bold text-cyan-800">{materi.title}</p>}
        >
          <div className="p-3">
            <div className="text-left text-default-500">{materi.description}</div>
          {/* Assignment Section */}
          <div className="rounded-md border text-left p-3 mt-3">
            <div className="flex space-x-2 items-center">
              <Button
                isIconOnly
                size="lg"
                className="bg-gradient-to-br from-sky-500 to-sky-700"
              >
                <FontAwesomeIcon
                  className="h-7 text-white"
                  icon={faFileArrowUp}
                />
              </Button>

              <div>
                <h2 className="text-medium">Assignment</h2>
                <h1 className="text-lg font-semibold text-cyan-700">
                  TP Minggu 1
                </h1>
              </div>
            </div>
            <div className="bg-default-100 rounded-md p-5 mt-2">
              <div>
                <p className="text-default-600">
                  <b>Opened:</b>Tuesday, 17 September 2024, 12:00 AM
                </p>
                <p className="text-default-600">
                  <b>Due:</b>Tuesday, 17 September 2024, 13:00 AM
                </p>
              </div>
              <Divider className="my-2" />
              <div className="text-default-600">Description...</div>
            </div>
          </div>
          {/* Quiz Section */}
          <div className="rounded-md border text-left p-3 mt-3">
            <div className="flex space-x-2 items-center">
              <Button
                isIconOnly
                size="lg"
                className="bg-gradient-to-br from-sky-500 to-sky-700"
              >
                <FontAwesomeIcon
                  className="h-7 text-white"
                  icon={faCircleCheck}
                />
              </Button>

              <div>
                <h2 className="text-medium">Quiz</h2>
                <h1 className="text-lg font-semibold text-cyan-700">
                  TA Minggu 1
                </h1>
              </div>
            </div>
            <div className="bg-default-100 rounded-md p-5 mt-2">
              <div>
                <p className="text-default-600">
                  <b>Opened:</b>Tuesday, 17 September 2024, 12:00 AM
                </p>
                <p className="text-default-600">
                  <b>Due:</b>Tuesday, 17 September 2024, 13:00 AM
                </p>
              </div>
              <Divider className="my-2" />
              <div className="text-default-600">Description...</div>
            </div>
          </div>
          </div>
          
        </AccordionItem>
      ))}
    </Accordion>
  );
}
