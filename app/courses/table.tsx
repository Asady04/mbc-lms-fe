"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
  Autocomplete,
  AutocompleteItem,
  Input,
  Kbd,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "@/components/icons";
import React, { Key } from "react";
import { useRouter } from "next/navigation";

const rows = [
  {
    key: "row1",
    title: "Sample Title 1",
    description: "This is a description for item 1.",
    image: "https://via.placeholder.com/150",
    action: "Edit",
  },
  {
    key: "row2",
    title: "Sample Title 2",
    description: "This is a description for item 2.",
    image: "https://via.placeholder.com/150",
    action: "Delete",
  },
  {
    key: "row3",
    title: "Sample Title 3",
    description: "This is a description for item 3.",
    image: "https://via.placeholder.com/150",
    action: "View",
  },
  {
    key: "row4",
    title: "Sample Title 4",
    description: "This is a description for item 4.",
    image: "https://via.placeholder.com/150",
    action: "Edit",
  },
  {
    key: "row5",
    title: "Introduction to AI and Big Data",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem architecto officiis nulla consequatur suscipit debitis temporibus dolorem molestiae quam saepe nihil beatae nobis facilis consequuntur, sint iste voluptate qui ut?",
    image: "https://via.placeholder.com/150",
    action: "Delete",
  },
];
const columns = [
  {
    key: "title",
    label: "TITLE",
  },
  {
    key: "description",
    label: "DESCRIPTION",
  },
  {
    key: "image",
    label: "IMAGE",
  },
  {
    key: "action",
    label: "Action",
  },
];

export default function CoursesTable() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between mb-3 items-center">
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          className="max-w-xs"
          size="lg"
          labelPlacement="outside"
          placeholder="Search..."
          startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="search"
        />
        <Button
          isIconOnly
          color="primary"
          className="dark:text-default-50"
          size="lg"
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>

      {/* table */}
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
              <TableCell>{item.title}</TableCell>
              <TableCell>
                {item.description.length > 40
                  ? `${item.description.slice(0, 40)}...`
                  : item.description}
              </TableCell>
              <TableCell>{item.image}</TableCell>
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
