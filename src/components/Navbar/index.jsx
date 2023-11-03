import Link from "next/link";
import InputSearch from "./inputSearch";
import { Gluten } from "next/font/google";
import ThemeButton from "./theme";

const gluten = Gluten({ subsets: ["latin"], weight: "500" });

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-color-blue-dark to-color-blue-tosca">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 ">
        <div className="flex justify-between w-full items-center">
          <Link
            href={"/"}
            className={`${gluten.className} text-color-yellow-fun hover:text-color-primary transition-all md:text-3xl text-xl font-bold `}
          >
            MangonimeList🥭
          </Link>
          <ThemeButton />
        </div>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
