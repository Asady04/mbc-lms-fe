'use client'
import { title } from "@/components/primitives";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/button";

export default function AssignmentHeader(props:any) {
  return (
    <div className="flex flex-row p-3 mt-3 items-center">
      <Button
        isIconOnly
        size="lg"
        className="bg-gradient-to-br from-sky-500 to-sky-700"
      >
        <FontAwesomeIcon
          className="h-7 text-white"
          icon={faFileArrowUp}
        />
      </Button>

      <div className="pl-3 text-left">
        <h1 className="font-semibold text-3xl">{props.title}</h1>
      </div>
    </div>
  );
}
