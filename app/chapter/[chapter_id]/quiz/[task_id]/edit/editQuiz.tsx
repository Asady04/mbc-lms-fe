"use client";
import React, { use, useEffect, useState } from "react";
import RichInput from "@/components/editor";
import { subtitle } from "@/components/primitives";
import { Button, Divider, Input } from "@heroui/react";
import { DatePicker } from "@heroui/react";
import {
  parseDate,
  getLocalTimeZone,
  now,
  parseDateTime,
} from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { apiUrl } from "@/config/api";
import { useRouter } from "next/navigation";
import EditSetting from "./editSetting";

interface Task {
  id: number;
  title: string;
  content: string;
  open: string;
  due: string;
  type: number;
}

export default function EditAssignment(props: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = React.useState(
    parseDateTime(now(getLocalTimeZone()).toString().split("T")[0])
  );
  const [due, setDue] = React.useState(
    parseDateTime(now(getLocalTimeZone()).toString().split("T")[0])
  );
  const [chapter_id, setChapter_id] = useState(props?.chapter_id || "");
  const [type, setType] = useState(0);
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      const timeZone = getLocalTimeZone(); // Get user's local timezone

      // Convert DatePicker value to local time (without UTC offset)
      const formattedOpen = open
        .toDate(timeZone)
        .toLocaleString("sv-SE")
        .replace("T", " ");
      const formattedDue = due
        .toDate(timeZone)
        .toLocaleString("sv-SE")
        .replace("T", " ");

      console.log("Sending data:", {
        title,
        content,
        type,
        open: formattedOpen,
        due: formattedDue,
        chapter_id,
      });

      const response = await fetch(`${apiUrl}api/tasks/${props.task_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          open: formattedOpen, // ✅ Use local datetime format
          due: formattedDue, // ✅ Use local datetime format
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("API Error Response:", data);
        throw new Error(`Failed to create task: ${response.status}`);
      }

      alert("Task updated successfully!");
      setTitle("");
      setContent("");
      setOpen(parseDateTime(now(getLocalTimeZone()).toString().split("T")[0]));
      setDue(parseDateTime(now(getLocalTimeZone()).toString().split("T")[0]));

      router.back();
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating task. Check API and network.");
    }
  };

  const getTask = async () => {
    try {
      const response = await fetch(`${apiUrl}api/tasks/${props.task_id}`);
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
    <div className="text-left text-default-600 p-5 mt-2 space-y-3">
      <Input
        label="Title"
        placeholder="Enter course title"
        variant="bordered"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        isRequired
      />
      <div className="w-full max-w-xl flex flex-row gap-4">
        <DatePicker
          className="max-w-[284px]"
          label="Open date"
          showMonthAndYearPickers
          hideTimeZone
          value={open}
          onChange={(newValue) => newValue && setOpen(newValue)}
        />
        <DatePicker
          className="max-w-[284px]"
          label="Due date"
          showMonthAndYearPickers
          hideTimeZone
          value={due}
          onChange={(newValue) => newValue && setDue(newValue)}
        />
      </div>
      <Divider className="my-2" />
      <div className="mt-4">
        <label className="text-sm">Question:</label>
        <RichInput content={content} setContent={setContent} />
      </div>
      <EditSetting task_id={props.task_id} />
      <Divider className="my-2" />
      <div className="mt-2 space-y-3">
        <Button color="primary" onPress={handleSubmit}>
          Update
        </Button>
      </div>
    </div>
  );
}
