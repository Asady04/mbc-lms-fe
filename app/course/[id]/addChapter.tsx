"use client";
import RichInput from "@/components/editor";
import { apiUrl } from "@/config/api";
import { faFileCsv, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
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

export default function AddChapter(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [course_id, setCourse_id] = useState(props.id);

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
      props.getAllChapters();
    } else {
      alert(data.error);
    }
  };

  return (
    <>
      <Button
        color="primary"
        className="dark:text-default-50"
        onPress={onOpen}
        endContent={<FontAwesomeIcon icon={faPlus} />}
      >
        Add Chapter
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
                Add Chapter
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
                  color="primary"
                  onPress={() => {
                    handleSubmit();
                  }}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
