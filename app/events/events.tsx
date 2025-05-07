"use client";
import { faCalendarMinus } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarDays,
  faCircleCheck,
  faClipboardQuestion,
  faFileArrowUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Image } from "@heroui/react";

export default function EventList() {
  return (
    <div className="">
      <div className="justify-between flex items-center">
        <h1 className="font-bold text-default-700 text-left text-large">
          Latest Events
        </h1>
        <Button isIconOnly color="primary">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>

      <div className="rounded-md p-5 shadow mt-3">
        {/* <div className="bg-default-100 text-default-400 rounded-md px-5 py-10 flex flex-col items-center justify-center space-y-4">
          <FontAwesomeIcon className="h-14" icon={faCalendarMinus} />
          <p>No upcoming event</p>
        </div> */}
        <div className="space-y-3">
          <div className="shadow flex flex-col md:flex-row justify-between items-center rounded-md p-3">
            <div className="flex flex-col md:flex-row space-y-3 space-x-5 items-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
              <div className="text-default-700 text-left w-full">
                <div className="flex space-x-1 items-center text-small text-primary-500">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <p>1/16/2025 14:11</p>
                </div>
                <h1 className="font-bold text-xl">Digilearn</h1>
                <p className="text-sm text-warning-500">coming soon</p>
                {/* <p className="text-sm text-success-500">opened</p> */}
                {/* <p className="text-sm text-danger-500">closed</p> */}
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

            <div className="p-5 ">
              <Button className="text-white font-semibold bg-gradient-to-tr from-green-500 to-cyan-500">
                Read More
              </Button>
            </div>
          </div>
          <div className="shadow flex flex-col md:flex-row justify-between items-center rounded-md p-3">
            <div className="flex flex-col md:flex-row space-y-3 space-x-5 items-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
              <div className="text-default-700 text-left w-full">
                <div className="flex space-x-1 items-center text-small text-primary-500">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <p>1/16/2025 14:11</p>
                </div>
                <h1 className="font-bold text-xl">Digilearn</h1>
                <p className="text-sm text-warning-500">coming soon</p>
                {/* <p className="text-sm text-success-500">opened</p> */}
                {/* <p className="text-sm text-danger-500">closed</p> */}
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

            <div className="p-5 ">
              <Button className="text-white font-semibold bg-gradient-to-tr from-green-500 to-cyan-500">
                Read More
              </Button>
            </div>
          </div>
          <div className="shadow flex flex-col md:flex-row justify-between items-center rounded-md p-3">
            <div className="flex flex-col md:flex-row space-y-3 space-x-5 items-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
              <div className="text-default-700 text-left w-full">
                <div className="flex space-x-1 items-center text-small text-primary-500">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <p>1/16/2025 14:11</p>
                </div>
                <h1 className="font-bold text-xl">Digilearn</h1>
                <p className="text-sm text-warning-500">coming soon</p>
                {/* <p className="text-sm text-success-500">opened</p> */}
                {/* <p className="text-sm text-danger-500">closed</p> */}
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

            <div className="p-5 ">
              <Button className="text-white font-semibold bg-gradient-to-tr from-green-500 to-cyan-500">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
