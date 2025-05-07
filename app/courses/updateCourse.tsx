"use client";
import {
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Tooltip,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function UpdateCourse(props: any) {
  const router = useRouter();

  return (
    <>
      <Tooltip content="update" color="success" showArrow={true}>
        <Button
          isIconOnly
          color="success"
          className="text-white dark:text-default-50"
          onPress={() => router.push("/course/" + props.id + "/edit")}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </Tooltip>
    </>
  );
}
