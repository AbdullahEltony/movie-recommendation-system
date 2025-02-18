"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const avtiveTab = "border-b-2 border-primary";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState("login");
  return (
    <div className="bg-[url('/main-img.png')] bg-cover bg-center max-h-full h-screen w-full relative">
      <div className="absolute w-full h-full bg-black/90 flex items-center justify-center">
        <div className="w-full">
          <Image src="/logo.svg" width={100} height={100} alt="logo"  className="mx-auto mb-6"/>
          <div className="w-2/5 rounded-lg bg-[#0d0d0d] p-5 mx-auto border border-gray-800">
            <ul className="flex gap-10 w-full justify-center mb-10">
              <li className={`p-2 ${active === "login" ? avtiveTab : ""}`}>
                <Link href={"/auth/login"} onClick={() => setActive("login")}>
                  Login
                </Link>
              </li>
              <li className={`p-2 ${active === "signup" ? avtiveTab : ""}`}>
                <Link href={"/auth/signup"} onClick={() => setActive("signup")}>
                  Signup
                </Link>
              </li>
            </ul>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
