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
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function UpdateChapter(props: any) {
  const router = useRouter();

  const handleViewTask = (chapter_id: number) => {
    router.push(`/chapter/${chapter_id}/edit-chapter`); // Pass ID in the URL
  };

  return (
    <>
      <Button
        color="success"
        className="dark:text-default-50"
        onPress={() => handleViewTask(props.id)}
        endContent={<FontAwesomeIcon icon={faEdit} />}
      >
        Edit Chapter
      </Button>
    </>
  );
}
