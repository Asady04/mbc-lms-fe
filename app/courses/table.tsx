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
  Tooltip,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEdit,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "@/components/icons";
import React, { Key, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/config/api";
import AddCourse from "./addCourse";
import UpdateCourse from "./updateCourse";
import DeleteCourse from "./deleteCourse";
import ViewCourse from "./viewCourse";

interface Course {
  id: number;
  title: string;
  description: string;
}

const columns = [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "description",
    label: "Description",
  },
  {
    key: "action",
    label: "Action",
  },
];

export default function CoursesTable() {
  const [courses, setCourses] = useState<Course[]>([]);

  const getAllCourses = async () => {
    await fetch(`${apiUrl + "api/courses"}`) // Change to your Laravel API URL
      .then((res) => res.json())
      .then((data: Course[]) => {
        console.log("Fetched courses:", data); // ✅ Log API response
        setCourses(data);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  };

  useEffect(() => {
    getAllCourses();
  }, []);

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
        <AddCourse getAllCourses={getAllCourses} />
      </div>

      {/* table */}
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={courses}>
          {(item) => (
            <TableRow key={item.id}>
              {/* {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )} */}
              <TableCell>{item.title}</TableCell>
              <TableCell>
                {item.description.length > 40 ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.description.slice(0, 40) + "...",
                    }}
                  ></div>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                )}
              </TableCell>
              <TableCell>
                <div className="flex space-x-1">
                  <ViewCourse id={item.id} />
                  <UpdateCourse getAllCourses={getAllCourses} id={item.id} />
                  <DeleteCourse getAllCourses={getAllCourses} id={item.id} />
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
