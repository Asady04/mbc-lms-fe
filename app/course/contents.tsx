"use client"
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import CourseItems from "./course";
import CourseGrade from "./grade";

export default function CourseContents() {
  let tabs = [
    {
      id: "course",
      label: "Course",
      content:
        (<CourseItems/>),
    },
    {
      id: "grades",
      label: "Grades",
      content:
        (<CourseGrade/>),
    },
    {
      id: "participants",
      label: "Participants",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs} variant="underlined">
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
