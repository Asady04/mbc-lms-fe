'use client'
import CourseHeader from "./header";
import CourseContents from "./contents";
import CourseSidebar from "./sidebar";
import { useEffect, useState } from "react";
import { apiUrl } from "@/config/api";
import { useParams } from "next/navigation";

interface Course {
  id: number;
  title: string;
  description: string;
}

export default function CoursePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();

  const getCourse = async () => {
    await fetch(`${apiUrl + "api/courses/" + params.id}`) // Change to your Laravel API URL
      .then((res) => res.json())
      .then((data: Course) => {
        console.log("Fetched course:", data); // ✅ Log API response
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch((error) => console.error("Error fetching course:", error));
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div>
      <div>
        <CourseHeader title={title} />
      </div>
      <div className="hidden md:block">
        <CourseSidebar id={params.id}/>
      </div>
      <div className="mt-5">
        <CourseContents description={description} id={params.id}/>
      </div>
    </div>
  );
}
