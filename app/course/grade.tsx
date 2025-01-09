"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
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
    task: "Tugas 1",
    range: "0-100",
    grade: "97",
    action: "Edit",
  },
  {
    key: "row2",
    task: "Tugas 2",
    range: "0-100",
    grade: "97",
    action: "Delete",
  },
  {
    key: "row3",
    task: "Tugas 3",
    range: "0-100",
    grade: "97",
    action: "View",
  },
  {
    key: "row4",
    task: "Tugas 4",
    range: "0-100",
    grade: "97",
    action: "Edit",
  },
];
const columns = [
  {
    key: "task",
    label: "TASK",
  },
  {
    key: "range",
    label: "Range",
  },
  {
    key: "grade",
    label: "GRADE",
  },
  {
    key: "action",
    label: "Action",
  },
];

export default function CourseGrade() {
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
              <TableCell>{item.task}</TableCell>
              <TableCell>{item.range}</TableCell>
              <TableCell>{item.grade}</TableCell>
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
