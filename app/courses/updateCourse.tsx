"use client";
import RichInput from "@/components/editor";
import { apiUrl } from "@/config/api";
import {
  faEdit,
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

interface Course {
  id: number;
  title: string;
  description: string;
}

export default function UpdateCourse(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const response = await fetch(`${apiUrl + "api/courses/" + props.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Course updated successfully!");
      setTitle("");
      setDescription("");
      props.getAllCourses();
    } else {
      alert(data.error);
    }
  };

  const getCourse = async () => {
    await fetch(`${apiUrl + "api/courses/" + props.id}`) // Change to your Laravel API URL
      .then((res) => res.json())
      .then((data: Course) => {
        console.log("Fetched users:", data); // ✅ Log API response
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  return (
    <>
      <Tooltip content="update" color="success" showArrow={true}>
        <Button
          isIconOnly
          color="success"
          className="text-white dark:text-default-50"
          onPress={() => {
            onOpen();
            getCourse();
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </Tooltip>

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
                Add Course
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
                    <label className="text-sm text-default-600">
                      Description:
                    </label>
                    <RichInput
                      content={description}
                      setContent={setDescription}
                    />
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
