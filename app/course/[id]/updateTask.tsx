"use client";

import { faArrowUpRightFromSquare, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function UpdateTask(props: any) {
  const router = useRouter  ();

  const handleViewTask = (id: number, chapter_id:number) => {
    if (props.type == 0) {
      router.push(`/chapter/${chapter_id}/assignment/${id}/edit`); // Pass ID in the URL
    }else{
      router.push(`/chapter/${chapter_id}/quiz/${id}/edit`); // Pass ID in the
    }
    
  };

  return (
    <>
      <Tooltip showArrow={true} color="success" content="update task">
        <Button
          isIconOnly
          color="success"
          className="text-white dark:text-default-50"
          onPress={() => handleViewTask(props.id, props.chapter_id)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </Tooltip>
    </>
  );
}
