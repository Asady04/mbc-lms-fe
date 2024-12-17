'use client'
import { subtitle, title } from "@/components/primitives";
import CoverImage from '@/assets/BannerLaboratorium.png';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import LoginInput from "./input";

export default function LoginPage() {
  return (
    <div
      className="max-w-full h-screen md:max-w-full flex items-start"
      // style={{ backgroundImage: CoverImage.src, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div
        className="relative shrink-1 w-0 lg:w-full h-full flex-col"
        // style={{ backgroundImage: CoverImage.src, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <img src={CoverImage.src} className="w-full h-full object-cover" />
      </div>
      <Card
        className="border-none rounded-sm dark:bg-blue-700 w-full h-full lg:max-w-md lg:rounded-md"
      >
        <CardHeader className="h-1/2 flex flex-row justify-center">
          <div className="inline-block max-w-xl text-center justify-center">
            <h1 className={title()} style={{ color: "black" }}>Header</h1>
            <h1 className={subtitle()} style={{ color: "black" }}>subtitle</h1>
          </div>
        </CardHeader>
        <CardBody className="h-1/2 flex flex-row justify-center">
          <LoginInput />
        </CardBody>
      </Card>
    </div>
  );
}
