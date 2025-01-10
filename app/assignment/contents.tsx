import { subtitle } from "@/components/primitives";
import { Divider } from "@nextui-org/react";

export default function AssignmentContent() {
  return (
    <div className="text-left text-default-600 p-5 mt-2">
      <div>
        <p>
          <b>Opened:</b> Tuesday, 17 September 2024, 12:00 AM
        </p>
        <p>
          <b>Due:</b> Tuesday, 17 September 2024, 13:00 AM
        </p>
      </div>
      <Divider className="my-2" />
      <div className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <ol className="ml-5 mt-2 list-decimal list-outside">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
        </ol>
      </div>
      <Divider className="my-2" />
    </div>
  );
}