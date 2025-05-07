"use client";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function ViewCourse(props: any) {
  const router = useRouter  ();

  const handleViewCourse = (id: number) => {
    router.push(`/course/${id}`); // Pass ID in the URL
  };

  return (
    <>
      <Tooltip showArrow={true} color="primary" content="visit">
        <Button
          isIconOnly
          color="primary"
          className="text-white dark:text-default-50"
          onPress={() => handleViewCourse(props.id)}
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Button>
      </Tooltip>
    </>
  );
}
