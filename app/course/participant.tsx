"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Avatar,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEdit,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import React, { Key } from "react";
import { useRouter } from "next/navigation";

const rows = [
  {
    key: "row1",
    name: "Jamaludin",
    group: "97",
    action: "Edit",
  },
  {
    key: "row2",
    name: "Albaghdadi",
    group: "97",
    action: "Delete",
  },
  {
    key: "row3",
    name: "Rusidi",
    group: "97",
    action: "View",
  },
  {
    key: "row4",
    name: "Ambatugam",
    group: "97",
    action: "Edit",
  },
];
const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "groups",
    label: "GROUPS",
  },
  {
    key: "action",
    label: "Action",
  },
];

export default function CourseParticipants() {
  return (
    <div className="">
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {/* {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )} */}
              <TableCell>
                <div className="flex items-center space-x-6">
                  <Avatar name={item.name} />
                  <p>{item.name} </p>
                </div>
              </TableCell>
              <TableCell>{item.group}</TableCell>
              <TableCell>
                <div className="flex space-x-1">
                  <Button
                    isIconOnly
                    color="primary"
                    className="text-white dark:text-default-50"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Button>
                  <Button
                    isIconOnly
                    color="success"
                    className="text-white dark:text-default-50"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  <Button
                    isIconOnly
                    color="danger"
                    className="dark:text-default-50"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
