"use client";
import { apiUrl } from "@/config/api";
import { faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@heroui/react";
import React, { useState } from "react";

export default function DeleteChapter(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleDelete = async () => {
    const response = await fetch(`${apiUrl + "api/chapters/" + props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      alert("Chapter deleted successfully!");
      props.getAllChapters();
    } else {
      alert(data.error);
    }
  };

  return (
    <>
      <Button
        color="danger"
        className="dark:text-default-50"
        onPress={onOpen}
        endContent={<FontAwesomeIcon icon={faTrash} />}
      >
        Delete Chapter
      </Button>

      <Modal
        isOpen={isOpen}
        placement="bottom-center"
        backdrop="blur"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure?
              </ModalHeader>
              <ModalBody>
                <div className="w-full flex p-5 justify-center items-center">
                  <FontAwesomeIcon
                    className="text-red-600 h-20"
                    icon={faTrashCan}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    handleDelete();
                    onClose();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
