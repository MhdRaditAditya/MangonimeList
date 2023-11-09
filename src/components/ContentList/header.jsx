import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-5">
      <h1 className="md:text-2xl text-sm font-bold text-color-secondary dark:text-color-primary">
        {title}
      </h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="flex gap-1 items-center md:text-xl text-sm hover:underline dark:hover:text-color-yellow-fun hover:text-color-blue-fun dark:text-color-primary text-color-secondary transition-all"
        >
          <ArrowSquareOut size={20} />
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
