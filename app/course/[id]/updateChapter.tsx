"use client";
import RichInput from "@/components/editor";
import { apiUrl } from "@/config/api";
import {
  faEdit,
  faFileCsv,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Tooltip,
} from "@heroui/react";
import React, { useState } from "react";

interface Chapter {
  id: number;
  title: string;
  content: string;
}

export default function UpdateChapter(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const response = await fetch(`${apiUrl + "api/chapters/" + props.id}`, {
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
      props.getAllChapters();
    } else {
      alert(data.error);
    }
  };

  const getChapter = async () => {
    await fetch(`${apiUrl + "api/chapters/" + props.id}`) // Change to your Laravel API URL
      .then((res) => res.json())
      .then((data: Chapter) => {
        console.log("Fetched chapter:", data); // ✅ Log API response
        setTitle(data.title);
        setContent(data.content);
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  return (
    <>
      <Button
        color="success"
        className="dark:text-default-50"
        onPress={() => {
          onOpen();
          getChapter();
        }}
        endContent={<FontAwesomeIcon icon={faEdit} />}
      >
        Edit Chapter
      </Button>

      <Modal
        isOpen={isOpen}
        placement="bottom-center"
        backdrop="blur"
        onOpenChange={onOpenChange}
        size="full"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update Chapter
              </ModalHeader>
              <ModalBody>
                <div className="space-y-2">
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
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="success"
                  onPress={() => {
                    handleSubmit();
                  }}
                >
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
