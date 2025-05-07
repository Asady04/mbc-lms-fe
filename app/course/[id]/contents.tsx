"use client"
import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import CourseItems from "./course";
import CourseGrade from "./grade";
import CourseParticipants from "./participant";

export default function CourseContents(props:any) {
  let tabs = [
    {
      id: "course",
      label: "Course",
      content:
        (<CourseItems description={props.description} id={props.id}/>),
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
      (<CourseParticipants/>),
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
