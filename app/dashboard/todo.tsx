"use client";
import {
  faCircleCheck,
  faClipboardQuestion,
  faFileArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react";

export default function ToDo() {
  return (
    <div className="">
      <h1 className="font-bold text-default-700 text-left text-large">
        To-Do List
      </h1>
      <div className="rounded-md p-5 shadow mt-3">
        {/* <div className="bg-default-100 text-default-400 rounded-md px-5 py-10 flex flex-col items-center justify-center space-y-4">
          <FontAwesomeIcon className="h-14" icon={faClipboardQuestion} />
          <p>No upcoming activities due</p>
        </div> */}
        <div className="space-y-3">
          <div className="shadow flex flex-col space-y-2 md:flex-row justify-between items-center rounded-md p-3">
            <div className="flex w-full space-x-5 items-center">
              <div className="bg-gradient-to-tr hidden md:block h-20 w-20 rounded-lg p-3 from-green-500 to-cyan-500">
                <FontAwesomeIcon
                  className="h-full text-white"
                  icon={faFileArrowUp}
                />
              </div>
              <div className="text-default-700 text-left">
                <h1 className="font-bold text-xl">TP Minggu 1</h1>
                <p className="text-sm">Assignment</p>
                <div className="text-md flex space-x-1">
                  <p className="font-semibold">Opened:</p>
                  <p>12 Januari 2025 13:43</p>
                </div>
                <div className="text-md flex space-x-1">
                  <p className="font-semibold">Closed:</p>
                  <p>13 Januari 2025 13:43</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end w-full">
              <Button className="text-white font-semibold bg-gradient-to-tr from-green-500 to-cyan-500">Add Submission</Button>
            </div>
          </div>
          <div className="shadow flex flex-col space-y-2 md:flex-row justify-between items-center rounded-md p-3">
            <div className="flex w-full space-x-5 items-center">
              <div className="bg-gradient-to-tr hidden md:block h-20 w-20 rounded-lg p-3 from-green-500 to-cyan-500">
                <FontAwesomeIcon
                  className="h-full text-white"
                  icon={faCircleCheck}
                />
              </div>
              <div className="text-default-700 text-left">
                <h1 className="font-bold text-xl">TA Minggu 1</h1>
                <p className="text-sm">Quiz</p>
                <div className="text-md flex space-x-1">
                  <p className="font-semibold">Opened:</p>
                  <p>12 Januari 2025 13:43</p>
                </div>
                <div className="text-md flex space-x-1">
                  <p className="font-semibold">Closed:</p>
                  <p>13 Januari 2025 13:43</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end w-full">
              <Button className="text-white font-semibold bg-gradient-to-tr from-green-500 to-cyan-500">Add Submission</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
