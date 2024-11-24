import { title } from "@/components/primitives";
import UsersTable from "./table";

export default function UsersPage() {
  return (
    <div>
      <h1 className={title()}>User</h1>
      <div className="mt-5 hover:-translate-y-1 duration-300">
        <UsersTable />
      </div>
    </div>
  );
}
