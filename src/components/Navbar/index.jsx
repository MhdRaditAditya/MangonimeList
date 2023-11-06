import Link from "next/link";
import InputSearch from "./inputSearch";
import { Gluten } from "next/font/google";
import UserActBtn from "./UserActBtn";
import ThemeButton from "./theme";

const gluten = Gluten({ subsets: ["latin"], weight: "500" });

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-color-purple-fun from-10% via-color-blue-fun via-30% to-color-tosca-fun to-90%">
      <div className="flex md:flex-row flex-col justify-between md:items-center md:p-4 pt-4 pb-2 px-2">
        <div className="flex justify-between items-center gap-6">
          <Link
            href={"/"}
            className={`${gluten.className} text-color-yellow-fun hover:text-color-primary transition-all md:text-3xl text-xl font-bold `}
          >
            MangonimeList👻
          </Link>
          <ThemeButton />
        </div>
        <InputSearch />
        <UserActBtn />
      </div>
    </header>
  );
};

export default Navbar;
