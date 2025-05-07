"use client";
import AssignmentHeader from "./header";
import AssignmentContent from "./contents";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { getLocalTimeZone, now, parseDateTime } from "@internationalized/date";
import { apiUrl } from "@/config/api";

interface Task {
  id: number;
  title: string;
  content: string;
  open: string;
  due: string;
  type: number;
}

export default function AssignmentPage() {
  const params = useParams();
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [open, setOpen] = React.useState(
      parseDateTime(now(getLocalTimeZone()).toString().split("T")[0])
    );
    const [due, setDue] = React.useState(
      parseDateTime(now(getLocalTimeZone()).toString().split("T")[0])
    );
    const getTask = async () => {
      try {
        const response = await fetch(`${apiUrl}api/tasks/${params.task_id}`);
        const data: Task = await response.json();
    
        console.log("Fetched Task:", data); // ✅ Log API response
    
        setTitle(data.title);
        setContent(data.content);
    
        // Convert MySQL date format to ISO 8601
        setOpen(parseDateTime(data.open.replace(" ", "T")));
        setDue(parseDateTime(data.due.replace(" ", "T")));
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
    
  
    useEffect(() => {
      getTask();
    }, []);
  return (
    <div className="border rounded-lg shadow-md">
      <div>
        <AssignmentHeader title={title}/>
      </div>
      <div>
        <AssignmentContent content={content} open={open} due={due}/>
      </div>
    </div>
  );
}
