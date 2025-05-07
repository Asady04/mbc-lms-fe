"use client";
import React, { use, useEffect, useState } from "react";
import RichInput from "@/components/editor";
import { Button, Divider, Input } from "@heroui/react";
import { DatePicker } from "@heroui/react";
import { getLocalTimeZone, now, parseDateTime } from "@internationalized/date";
import { apiUrl } from "@/config/api";
import { useRouter } from "next/navigation";

export default function AddChapter(props: any) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [course_id, setCourse_id] = useState(props.course_id);

  const handleSubmit = async () => {
    const response = await fetch(`${apiUrl + "api/chapters"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, course_id }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Chapter created successfully!");
      setTitle("");
      setContent("");
      router.back();
    } else {
      alert(data.error);
    }
  };

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
      <div className="mt-2">
        <label className="text-sm text-default-600">Content:</label>
        <RichInput content={content} setContent={setContent} />
      </div>
      <Divider className="my-2" />
      <div className="mt-2 space-y-3">
        <Button color="primary" onPress={handleSubmit}>
          Add
        </Button>
      </div>
    </div>
  );
}
