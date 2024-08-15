"use client";

import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { MobileSidebar } from "./MobilSidebar";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav
      className="flex flex-row justify-between navbar-gradient p-3 text-white text-[17px] sm:text-lg md:text-xl font-medium border-b-[0.1px] border-gray-400
     shadow-sm items-center"
    >
      <ul className=" hidden md:flex flex-row gap-x-4 md:gap-x-8 pl-5 cursor-pointer">
        <li>Tournamax</li>
        <li onClick={() => router.push("/")}>Home</li>
        <li onClick={() => router.push("/addtodo")}>Add Task</li>
      </ul>
      <div className="md:hidden block"><MobileSidebar/></div>
      <h1 className="md:hidden block">Tournamax</h1>
      <UserButton />
    </nav>
  );
};

export default Navbar;
