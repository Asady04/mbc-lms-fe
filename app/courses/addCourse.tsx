"use client";
import { apiUrl } from "@/config/api";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Tooltip,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddCourseLink(props: any) {
  const router = useRouter();

  return (
    <>
      <Tooltip content="add course" color="primary" showArrow={true}>
        <Button
          isIconOnly
          color="primary"
          className="dark:text-default-50"
          size="lg"
          onPress={()=>router.push("/courses/add")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
    </>
  );
}
