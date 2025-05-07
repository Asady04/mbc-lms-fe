'use client'
import { subtitle, title } from "@/components/primitives";
import CoverImage from '@/assets/BannerLaboratorium.png';
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
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
        className="border-none rounded-sm w-full h-full lg:max-w-md lg:rounded-none"
      >
        <CardHeader className="h-1/2 flex flex-row justify-center">
          <div className="inline-block max-w-xl text-center justify-center">
            <h1 className={title()} >Login</h1>
            <h1 className={subtitle()} >Log into your account</h1>
          </div>
        </CardHeader>
        <CardBody className="h-1/2 flex flex-row justify-center">
          <LoginInput />
        </CardBody>
      </Card>
    </div>
  );
}
