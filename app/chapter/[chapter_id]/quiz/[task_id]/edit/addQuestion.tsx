"use client";
import RichInput from "@/components/editor";
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
  Input,
  Tooltip,
  Select,
  SelectItem,
} from "@heroui/react";
import React, { useState } from "react";

export default function AddQuestion(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correct_option, setCorrect_option] = React.useState<Set<string>>(
    new Set()
  );

  const handleSubmit = async () => {
    const selectedKey = Array.from(correct_option)[0];
  
    // Map selected key to its corresponding value
    let correctAnswerValue = "";
    switch (selectedKey) {
      case "option1":
        correctAnswerValue = option1;
        break;
      case "option2":
        correctAnswerValue = option2;
        break;
      case "option3":
        correctAnswerValue = option3;
        break;
      case "option4":
        correctAnswerValue = option4;
        break;
      default:
        correctAnswerValue = "";
    }
  
    const response = await fetch(`${apiUrl}api/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        option1,
        option2,
        option3,
        option4,
        correct_option: correctAnswerValue,
        task_id: Number(props.task_id),
      }),
    });
    console.log("Raw Response:", response);
    const data = await response.json();
  
    if (response.ok) {
      alert("Question created successfully!");
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setCorrect_option(new Set());
  
      props.getQuestions();
    } else {
      alert(data.error);
    }
  };
  
  

  return (
    <>
      <Button
        color="primary"
        className="dark:text-default-50"
        onPress={onOpen}
        endContent={<FontAwesomeIcon icon={faPlus} />}
      >
        Add Question
      </Button>

      <Modal
        isOpen={isOpen}
        placement="bottom-center"
        backdrop="blur"
        onOpenChange={onOpenChange}
        size="full"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Question
              </ModalHeader>
              <ModalBody>
                <div className="space-y-2">
                  <Input
                    label="Question"
                    placeholder="Enter course title"
                    variant="bordered"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    isRequired
                  />
                  <Input
                    label="Option 1"
                    placeholder="Enter course title"
                    variant="bordered"
                    value={option1}
                    onChange={(e) => setOption1(e.target.value)}
                    isRequired
                  />
                  <Input
                    label="Option 2"
                    placeholder="Enter course title"
                    variant="bordered"
                    value={option2}
                    onChange={(e) => setOption2(e.target.value)}
                    isRequired
                  />
                  <Input
                    label="Option 3"
                    placeholder="Enter course title"
                    variant="bordered"
                    value={option3}
                    onChange={(e) => setOption3(e.target.value)}
                    isRequired
                  />
                  <Input
                    label="Option 4"
                    placeholder="Enter course title"
                    variant="bordered"
                    value={option4}
                    onChange={(e) => setOption4(e.target.value)}
                    isRequired
                  />
                  <Select
                    className="max-w-xs"
                    placeholder="Choose Correct Answer"
                    label="Correct Answer"
                    selectedKeys={correct_option}
                    onSelectionChange={(keys) => {
                      setCorrect_option(keys as unknown as Set<string>);
                    }}
                  >
                    <SelectItem key="option1" value={option1}>
                      Option 1
                    </SelectItem>
                    <SelectItem key="option2" value={option2}>
                      Option 2
                    </SelectItem>
                    <SelectItem key="option3" value={option3}>
                      Option 3
                    </SelectItem>
                    <SelectItem key="option4" value={option4}>
                      Option 4
                    </SelectItem>
                  </Select>
                  <p className="text-small text-default-500">
                    Selected:{" "}
                    {(() => {
                      const key = Array.from(correct_option)[0];
                      switch (key) {
                        case "option1":
                          return option1;
                        case "option2":
                          return option2;
                        case "option3":
                          return option3;
                        case "option4":
                          return option4;
                        default:
                          return "None";
                      }
                    })()}
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
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
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
