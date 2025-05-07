import { title } from "@/components/primitives";

export default function CourseHeader(props:any) {
  return (
    <div className="rounded-lg py-10 bg-gradient-to-tr from-sky-500 via-sky-900 to-sky-950">
      <h1 className={`${title()} text-default-100`}>{props.title}</h1>
    </div>
  );
}
