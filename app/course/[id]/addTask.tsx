import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from "@heroui/react";

export default function AddTask(props:any) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          color="primary"
          className="dark:text-default-50"
          endContent={<FontAwesomeIcon icon={faPlus} />}
        >
          Add Task
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="assignment"><Link size="sm" color="foreground" href={`/chapter/${props.chapter_id}/assignment/add`}>
        Add Assignment
      </Link></DropdownItem>
        <DropdownItem key="multiple"><Link size="sm" color="foreground" href={`/chapter/${props.chapter_id}/quiz/add`}>
        Add Multiple Choice
      </Link></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
