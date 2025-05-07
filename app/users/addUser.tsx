"use client";
import { apiUrl } from "@/config/api";
import { faFileCsv, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
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
  Tabs,
  Tab,
  Tooltip,
} from "@heroui/react";
import React, { useState } from "react";

export const EyeSlashFilledIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
        fill="currentColor"
      />
      <path
        d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
        fill="currentColor"
      />
      <path
        d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
        fill="currentColor"
      />
      <path
        d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
        fill="currentColor"
      />
      <path
        d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const EyeFilledIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
        fill="currentColor"
      />
      <path
        d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default function AddUser(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [role, setRole] = useState(0);
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [file, setFile] = useState<File | null>(null);

  const selectRoles = [
    { key: 0, label: "User" },
    { key: 1, label: "Assistant" },
    { key: 2, label: "Admin" },
  ];

  const handleSubmit = async () => {
    const response = await fetch(`${apiUrl + "api/users"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, nim, email, phone_number, role, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("User created successfully!");
      setName("");
      setNim("");
      setEmail("");
      setPhone_number("");
      setRole(0);
      setPassword("");
      props.getAllUsers();
    } else {
      alert(data.error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("csv_file", file);

    const response = await fetch(`${apiUrl + "api/import-users"}`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      alert("User imported successfully!");
      props.getAllUsers();
    } else {
      alert(result.error);
    }
  };

  return (
    <>
      <Tooltip content="add user" color="primary" showArrow={true}>
        <Button
          isIconOnly
          color="primary"
          className="dark:text-default-50"
          size="lg"
          onPress={onOpen}
        >
          <FontAwesomeIcon icon={faPlus} />
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
                Add User
              </ModalHeader>
              <ModalBody>
                <Tabs aria-label="Options" color="primary" variant="bordered">
                  <Tab
                    key="single"
                    title={
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Single</span>
                      </div>
                    }
                  >
                    <div className="space-y-2">
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
                      <Input
                        endContent={
                          <button
                            aria-label="toggle password visibility"
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                          >
                            {isVisible ? (
                              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                          </button>
                        }
                        label="Password"
                        placeholder="Enter your password"
                        variant="bordered"
                        type={isVisible ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isRequired
                      />
                      <div className="flex justify-end p-3 pr-0 space-x-2">
                        <Button color="danger" variant="flat" onPress={onClose}>
                          Close
                        </Button>
                        <Button
                          color="primary"
                          onPress={() => {
                            handleSubmit();
                          }}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    key="import"
                    title={
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFileCsv} />
                        <span>Import</span>
                      </div>
                    }
                  >
                    <Input
                      type="file"
                      description="import your file (.csv)"
                      accept=".csv"
                      onChange={handleFileChange}
                    />
                    <div className="flex justify-end p-3 pr-0 space-x-2">
                      <Button color="danger" variant="flat" onPress={onClose}>
                        Close
                      </Button>
                      <Button
                        color="success"
                        className="text-white dark:text-black"
                        onPress={() => {
                          handleUpload();
                        }}
                      >
                        Import CSV
                      </Button>
                    </div>
                  </Tab>
                </Tabs>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
