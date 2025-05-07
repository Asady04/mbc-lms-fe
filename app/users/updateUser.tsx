"use client";
import { apiUrl } from "@/config/api";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Select,
  SelectItem,
  Tooltip,
} from "@heroui/react";
import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  nim: string;
  role: number;
  phone_number: string;
}

export default function UpdateUser(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [role, setRole] = useState(0);

  const selectRoles = [
    { key: 0, label: "User" },
    { key: 1, label: "Assistant" },
    { key: 2, label: "Admin" },
  ];

  const handleSubmit = async () => {
    const response = await fetch(`${apiUrl + "api/users/" + props.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, nim, email, phone_number, role }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("User updated successfully!");
      setName("");
      setNim("");
      setEmail("");
      setPhone_number("");
      setRole(0);
      props.getAllUsers();
    } else {
      alert(data.error);
    }
  };

  const getUser = async () => {
    await fetch(`${apiUrl + "api/users/" + props.id}`) // Change to your Laravel API URL
      .then((res) => res.json())
      .then((data: User) => {
        console.log("Fetched users:", data); // ✅ Log API response
        setName(data.name);
        setNim(data.nim);
        setEmail(data.email);
        setPhone_number(data.phone_number);
        setRole(data.role);
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  return (
    <>
      <Tooltip content="update" color="success" showArrow={true}>
        <Button
          isIconOnly
          color="success"
          className="text-white dark:text-default-50"
          onPress={() => {
            onOpen();
            getUser();
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        placement="bottom-center"
        backdrop="blur"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update User
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isRequired
                />
                <Input
                  label="NIM"
                  placeholder="Enter your NIM"
                  variant="bordered"
                  value={nim}
                  onChange={(e) => setNim(e.target.value)}
                  isRequired
                />
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  variant="bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isRequired
                />
                <Input
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  variant="bordered"
                  value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                  isRequired
                />
                <Select
                  label="Role"
                  placeholder="Select the role"
                  selectedKeys={role.toString()}
                  variant="bordered"
                  onSelectionChange={(keys) => {
                    const selectedKey = Array.from(keys)[0]; // Extract first selected key
                    setRole(parseInt(selectedKey as string, 10)); // Convert to integer before setting
                  }}
                >
                  {selectRoles.map((roleOption) => (
                    <SelectItem key={roleOption.key.toString()}>
                      {roleOption.label}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="success"
                  onPress={() => {
                    handleSubmit();
                  }}
                >
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
