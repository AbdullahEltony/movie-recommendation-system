"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function VerifyEmail() {
  const { email } = useParams();
  const emailAddress = decodeURIComponent(email as string);
  return (
    <div className="flex items-center justify-center bg-cover bg-center">
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg text-center w-96">
        <h2 className="text-white text-2xl font-semibold">Verify Your Email</h2>
        <p className="text-gray-400 mt-2">
          {" We've sent a confirmation email to:"} <br />
          <span className="text-red-400 font-semibold">{emailAddress}</span>
        </p>
        <p className="text-gray-400 mt-3">
          Please check your inbox and click the verification link.
        </p>
        <p className="text-gray-400 text-sm mt-3">Didn’t receive the email?</p>
        <Link href={"/auth/signup"} className="text-red-400 hover:underline">
          Resend Email
        </Link>
      </div>
    </div>
  );
}
