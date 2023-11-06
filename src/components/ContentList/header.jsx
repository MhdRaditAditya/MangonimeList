import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-5">
      <h1 className="md:text-2xl text-xl font-bold text-color-secondary dark:text-color-primary">
        {title}
      </h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="flex gap-1 items-center md:text-xl text-base underline dark:hover:text-color-yellow-fun hover:text-color-blue-fun dark:text-color-primary text-color-secondary transition-all"
        >
          <ArrowSquareOut size={22} />
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
