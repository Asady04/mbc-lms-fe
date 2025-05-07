"use client";
import { subtitle } from "@/components/primitives";
import { Button, Divider, Input } from "@heroui/react";
import { useDateFormatter } from "@react-aria/i18n";

export default function AssignmentContent(props: any) {
  let formatter = useDateFormatter({ dateStyle: "full", timeStyle: "short" });
  return (
    <div className="text-left text-default-600 p-5 mt-2">
      <div>
        <p className="text-default-600">
          <b>Opened:</b>
          {props.open
            ? formatter.format(new Date(props.open)) // ✅ Convert to Date object
            : "--"}
        </p>
        <p className="text-default-600">
          <b>Due:</b>
          {props.due
            ? formatter.format(new Date(props.due)) // ✅ Convert to Date object
            : "--"}
        </p>
      </div>
      <Divider className="my-2" />
      <div
        className="text-default-600 text-left"
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      ></div>
      <Divider className="my-2" />
      <div>
        <p>Submit here:</p>
      </div>
      <div className="mt-2 space-y-3">
        <Input
          className="max-w-2xl"
          description="Submit your assignment here as an image (.jpg, .png)"
          type="file"
        />
        <Button color="primary">Submit</Button>
      </div>
    </div>
  );
}
