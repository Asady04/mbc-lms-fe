"use client";
import {
  faClipboardQuestion,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@heroui/react";

export default function CoursesList() {
  return (
    <div className="">
      <h1 className="font-bold text-default-700 text-left text-large">
        Course Overview
      </h1>
      {/* <div className="rounded-md p-5 shadow mt-3">
        <div className="bg-default-100 text-default-400 rounded-md px-5 py-10 flex flex-col items-center justify-center space-y-4">
          <FontAwesomeIcon className="h-14" icon={faClipboardQuestion} />
          <p>No courses you have enrolled</p>
        </div>
      </div> */}
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Created by</p>
            <small className="text-default-500 flex items-center space-x-1  ">
              <FontAwesomeIcon icon={faUserTie} />
              <p>Jamaludin</p>
            </small>
            <h4 className="font-bold text-large text-left">
              Keamanan Data dan Blockchain
            </h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="w-full h-60 bg-stripe-gradient-secondary rounded-xl"></div>
          </CardBody>
          <CardFooter>
            <div className="flex w-full justify-end">
              <Button color="primary" className="font-semibold">
                View Course
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Created by</p>
            <small className="text-default-500 flex items-center space-x-1  ">
              <FontAwesomeIcon icon={faUserTie} />
              <p>Jamaludin</p>
            </small>
            <h4 className="font-bold text-large text-left">Big Data</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="w-full h-60 bg-stripe-gradient-primary rounded-xl"></div>
          </CardBody>
          <CardFooter>
            <div className="flex w-full justify-end">
              <Button color="primary" className="font-semibold">
                View Course
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Created by</p>
            <small className="text-default-500 flex items-center space-x-1  ">
              <FontAwesomeIcon icon={faUserTie} />
              <p>Jamaludin</p>
            </small>
            <h4 className="font-bold text-large text-left">Cybersecurity</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="w-full h-60 bg-stripe-gradient-success rounded-xl"></div>
          </CardBody>
          <CardFooter>
            <div className="flex w-full justify-end">
              <Button color="primary" className="font-semibold">
                View Course
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Created by</p>
            <small className="text-default-500 flex items-center space-x-1  ">
              <FontAwesomeIcon icon={faUserTie} />
              <p>Jamaludin</p>
            </small>
            <h4 className="font-bold text-large text-left">Game Tech</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="w-full h-60 bg-stripe-gradient-warning rounded-xl"></div>
          </CardBody>
          <CardFooter>
            <div className="flex w-full justify-end">
              <Button color="primary" className="font-semibold">
                View Course
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Created by</p>
            <small className="text-default-500 flex items-center space-x-1  ">
              <FontAwesomeIcon icon={faUserTie} />
              <p>Jamaludin</p>
            </small>
            <h4 className="font-bold text-large text-left">
              Geographical Information System
            </h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="w-full h-60 bg-stripe-gradient-danger rounded-xl"></div>
          </CardBody>
          <CardFooter>
            <div className="flex w-full justify-end">
              <Button color="primary" className="font-semibold">
                View Course
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
