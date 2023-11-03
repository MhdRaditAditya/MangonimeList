import { PT_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./provider";

const ptSerif = PT_Serif({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "My AnimeList",
  description: "Trusted anime website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ptSerif.className} dark:bg-color-dark bg-color-light`}
        suppressContentEditableWarning={true}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
