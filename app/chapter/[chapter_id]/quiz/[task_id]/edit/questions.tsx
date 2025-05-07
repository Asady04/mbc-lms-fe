"use client";
import React, { use, useEffect, useState } from "react";
import { apiUrl } from "@/config/api";
import AddQuestion from "./addQuestion";

interface Question {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct_option: string;
}

export default function Questions(props: any) {
  const [questions, setQuestions] = useState<Question[]>([]);

  const getAllQuestions = async () => {
    try {
      const response = await fetch(
        `${apiUrl}api/tasks/${props.task_id}/questions`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Fetched tasks:", result.data); // ✅ Log API response correctly

      setQuestions(result.data); // ✅ Set only the actual tasks data
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center px-3 justify-between w-full">
        <div className="text-left">
          <h1 className="font-semibold text-3xl">Questions</h1>
        </div>
        <div className="p-3">
          <AddQuestion getQuestions={getAllQuestions} task_id={props.task_id}/>
        </div>
      </div>

      {questions.map((question, key) => (
        <div className="rounded-md border text-left p-3 mt-3" key={key}>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <h2 className="text-medium">{question.question}</h2>
            </div>
          </div>
          <div className="mt-2">
            <p>Option 1: {question.option1}</p>
            <p>Option 2: {question.option2}</p>
            <p>Option 3: {question.option3}</p>
            <p>Option 4: {question.option4}</p>
            <p>Correct Answer: {question.correct_option}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
