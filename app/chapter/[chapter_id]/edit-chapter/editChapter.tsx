"use client";
import React, { use, useEffect, useState } from "react";
import RichInput from "@/components/editor";
import { Button, Divider, Input } from "@heroui/react";
import { apiUrl } from "@/config/api";
import { useRouter } from "next/navigation";

interface Chapter {
  id: number;
  title: string;
  content: string;
}

export default function EditChapter(props: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [course_id, setCourse_id] = useState(props.course_id);

  const router = useRouter();

  const handleSubmit = async () => {
      const response = await fetch(`${apiUrl + "api/chapters/" + props.chapter_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Chapter updated successfully!");
        setTitle("");
        setContent("");
        router.back();
      } else {
        alert(data.error);
      }
    };

    
  
    const getChapter = async () => {
      await fetch(`${apiUrl + "api/chapters/" + props.chapter_id}`) // Change to your Laravel API URL
        .then((res) => res.json())
        .then((data: Chapter) => {
          console.log("Fetched chapter:", data); // ✅ Log API response
          setTitle(data.title);
          setContent(data.content);
        })
        .catch((error) => console.error("Error fetching users:", error));
    };

    useEffect(() => {
      getChapter();
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
      <div className="mt-2">
        <label className="text-sm text-default-600">Content:</label>
        <RichInput content={content} setContent={setContent} />
      </div>
      <Divider className="my-2" />
      <div className="mt-2 space-y-3">
        <Button color="primary" onPress={handleSubmit}>
          Update
        </Button>
      </div>
    </div>
  );
}
