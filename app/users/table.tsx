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
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "@/components/icons";
import React, { Key } from "react";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    nim: "12131431414",
    group: 3,
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    nim: "12131431414",
    group: 3,
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    nim: "12131431414",
    group: 3,
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    nim: "12131431414",
    group: 3,
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "nim",
    label: "NIM",
  },
  {
    key: "group",
    label: "GROUP",
  },
  {
    key: "action",
    label: "Action",
  },
];

const roles = [
  { label: "All", value: "all" },
  { label: "Praktikan", value: "praktikan" },
  { label: "Asisten", value: "asisten" },
  { label: "Admin", value: "admin" },
];

export default function UsersTable() {
  const [value, setValue] = React.useState<string>("all");
  const handleSelectionChange = (key: Key | null) => {
    if (key !== null) {
      setValue(key.toString()); // Pastikan tipe string
    }
  };
  return (
    <div className="w-full">
      <div className="w-full flex justify-between mb-3 items-center">
        <Autocomplete
          defaultInputValue="All"
          label="Filter Role"
          className="max-w-xs"
          size="sm"
          defaultItems={roles}
          selectedKey={value}
          onSelectionChange={handleSelectionChange}
        >
          {roles.map((role) => (
            <AutocompleteItem key={role.value} value={role.value}>
              {role.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <div className="flex items-center space-x-3">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            size="lg"
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
          />
          <Button isIconOnly color="primary" className="dark:text-default-50" size="lg">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>
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
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.nim}</TableCell>
              <TableCell>{item.group}</TableCell>
              <TableCell>
                <div className="flex space-x-1">
                  <Button isIconOnly color="success" className="text-white dark:text-default-50">
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  <Button isIconOnly color="danger" className="dark:text-default-50">
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
