"use client";
import RichInput from "@/components/editor";
import { Button, Form, Input } from "@heroui/react";
import React, { useState } from "react";

export default function EventDetail() {
  const [formData, setFormData] = React.useState({
    title: "", // Provide initial values to avoid `undefined`
    email: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [action, setAction] = React.useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAction(`submit ${JSON.stringify(formData)}`);
  };

  const handleReset = () => {
    setFormData({ title: "", email: "" }); // Reset form data
    setAction("reset");
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]; // Get the first selected file
  //   setSelectedFile(file);
  // };

  return (
    <div className="">
      <div className="rounded-md p-5 shadow mt-3">
        <div className="shadow rounded-md p-3">
          <div className="space-y-5">
            <h1 className="font-bold text-default-700 text-4xl">Add Event</h1>
            <Form
              className="w-full flex flex-col gap-4 p-5"
              validationBehavior="native"
              onReset={handleReset}
              onSubmit={handleSubmit}
            >
              <Input
                isRequired
                errorMessage="Please enter a valid username"
                label="Title"
                labelPlacement="outside"
                name="title"
                placeholder="Enter your title"
                type="text"
                value={formData.title} // Controlled input
                onChange={handleInputChange}
              />

              <Input
                label="Image"
                labelPlacement="outside"
                name="image"
                type="file"
              />
              <div className="w-full">
                <RichInput />
              </div>

              <div className="flex gap-2">
                <Button color="primary" type="submit">
                  Submit
                </Button>
                <Button type="reset" variant="flat">
                  Reset
                </Button>
              </div>
              {action && (
                <div className="text-small text-default-500">
                  Action: <code>{action}</code>
                </div>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
