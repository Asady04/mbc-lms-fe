"use client";
import React, { useState } from "react";
import RichInput from "@/components/editor";
import { Button, Divider, Input } from "@heroui/react";
import { apiUrl } from "@/config/api";
import { useRouter } from "next/navigation";

export default function AddCourse(props: any) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const response = await fetch(`${apiUrl + "api/courses"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Course created successfully!");
      setTitle("");
      setDescription("");
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
        <label className="text-sm text-default-600">Description:</label>
        <RichInput content={description} setContent={setDescription} />
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
