'use client'
import { title } from "@/components/primitives";
import CoverImage from '@/assets/BannerLaboratorium.png';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function LoginPage() {
  return (
    <div
      className="w-full h-screen flex items-start"
      style={{ backgroundImage: CoverImage.src, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative w-full h-full flex-col">
        {/* <img src={CoverImage.src} className="w-full h-full object-cover" /> */}
      </div>
      <Card
        isBlurred
        className="border-none dark:bg-white w-1/3 h-full"
        shadow="sm"
      >
        <CardHeader className="h-1/4 flex flex-col justify-end">
          <h1 className={title()} style={{ color: "black" }}>Login</h1>
        </CardHeader>
        <CardBody>
        </CardBody>
      </Card>
    </div>
  );
}
