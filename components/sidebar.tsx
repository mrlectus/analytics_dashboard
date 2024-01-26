"use client";
import Link from "next/link";
import {
  SVGBugger,
  SVGDark,
  SVGIcon1,
  SVGIcon2,
  SVGIcon3,
  SVGIcon4,
  SVGIcon5,
  SVGIcon6,
  SVGLight,
  SVGLogo,
  SVGLogout,
  SVGSettings,
} from "./icons/icons";

import { useTheme } from "next-themes";

const SVGLink = [
  <SVGBugger />,
  <SVGIcon1 />,
  <SVGIcon2 />,
  <SVGIcon3 />,
  <SVGIcon4 />,
  <SVGIcon5 />,
];

export const SideBar = () => {
  const { setTheme } = useTheme();
  return (
    <div className="w-[76px] fixed z-10 border border-t border-l border-b flex flex-col justify-between h-screen bg-[#F7F8FA] dark:bg-black">
      <div className="flex flex-col justify-center items-center mt-5">
        <div>
          <SVGLogo />
        </div>
        <div className="flex mt-4 flex-col gap-4 justify-center items-center w-full">
          {SVGLink.map((item) => {
            return (
              <Link
                key={item.key}
                href="#"
                className="hover:border-r-4  w-full flex hover:border-r-black justify-center dark:hover:border-r-white"
              >
                {item}
              </Link>
            );
          })}
          <div className="flex flex-col dark:flex-col-reverse gap-2 border rounded-full p-2">
            <SVGLight onClick={() => setTheme("light")} />
            <SVGDark onClick={() => setTheme("dark")} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link href="#">
          <SVGIcon6 />
        </Link>
        <Link href="#">
          <SVGSettings />
        </Link>
        <Link href="#">
          <SVGLogout />
        </Link>
      </div>
    </div>
  );
};
