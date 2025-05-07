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
  Checkbox,
  Input,
  Link,
  Select,
  SelectItem,
  Tabs,
  Tab,
  Tooltip,
} from "@heroui/react";
import React, { useState } from "react";

export default function AddCourse(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
      props.getAllCourses();
    } else {
      alert(data.error);
    }
  };

  return (
    <>
      <Tooltip content="add course" color="primary" showArrow={true}>
        <Button
          isIconOnly
          color="primary"
          className="dark:text-default-50"
          size="lg"
          onPress={onOpen}
        >
          <FontAwesomeIcon icon={faPlus} />
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
