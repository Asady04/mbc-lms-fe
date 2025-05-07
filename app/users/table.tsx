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
  Chip,
  ScrollShadow,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "@/components/icons";
import React, { Key, useEffect, useState } from "react";
import { apiUrl } from "@/config/api";
import AddUser from "./addUser";
import UpdateUser from "./updateUser";
import DeleteUser from "./deleteUser";

interface User {
  id: number;
  name: string;
  email: string;
  nim: string;
  role: number;
  phone_number: string;
}

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "nim",
    label: "NIM",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "phoneNumber",
    label: "Phone Number",
  },
  {
    key: "role",
    label: "Role",
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
  const [users, setUsers] = useState<User[]>([]);

  const getAllUsers = async () => {
    await fetch(`${apiUrl + "api/users"}`) // Change to your Laravel API URL
      .then((res) => res.json())
      .then((data: User[]) => {
        console.log("Fetched users:", data); // ✅ Log API response
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handleSelectionChange = (key: Key | null) => {
    if (key !== null) {
      setValue(key.toString()); // Pastikan tipe string
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

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
          {/* <Input
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
          /> */}
          <AddUser getAllUsers={getAllUsers} />
        </div>
      </div>

      {/* table */}
      <ScrollShadow orientation="horizontal">
        <Table isStriped>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>

          <TableBody emptyContent={"No rows to display."}>  
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.nim}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone_number}</TableCell>
                <TableCell>
                  {user.role == 0 ? (
                    <Chip color="primary" variant="dot">
                      user
                    </Chip>
                  ) : user.role == 1 ? (
                    <Chip color="secondary" variant="dot">
                      assistant
                    </Chip>
                  ) : user.role == 2 ? (
                    <Chip color="danger" variant="dot">
                      admin
                    </Chip>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <UpdateUser id={user.id} getAllUsers={getAllUsers} />
                    <DeleteUser id={user.id} getAllUsers={getAllUsers} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollShadow>
    </div>
  );
}
