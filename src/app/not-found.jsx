import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="row">
        <div className="flex justify-center items-center gap-4">
          <h3 className="dark:text-color-yellow-fun text-color-blue-tosca text-2xl font-bold">
            404 |
          </h3>
          <div className="flex justify-center items-center gap-2">
            <FileSearch
              size={29}
              className="dark:text-color-yellow-fun text-color-blue-tosca"
            />
            <h3 className="dark:text-color-yellow-fun text-color-blue-tosca text-2xl font-bold">
              NOT FOUND
            </h3>
          </div>
        </div>

        <Link
          href={`/`}
          className="dark:text-color-yellow-fun text-color-blue-tosca text-2xl font-bold p-8 flex justify-center items-center underline"
        >
          Back ?
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
