import View from "@/app/ui/dashboard/View/page";
import Theming from "@/components/providers/Theme";
import logo from "@/public/Branding.svg";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000426]">
        <Analytics />
        <Theming>
          <div className="sticky top-0 z-50 border-b border-[#58585f]">
            <div className=" ">
              <div className="">
                <div className="bg-[#000426] backdrop-blur-md h-[70px]  w-full flex items-center px-10">
                  <Link href={"/"}>
                    <Image alt="" src={logo.src} height={30} width={140} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {children}
        </Theming>
      </body>
    </html>
  );
}
