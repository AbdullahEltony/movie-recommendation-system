"use client";
import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { RegisterSchema } from "@/lib/validation";
import Link from "next/link";
import { CustomSelect, DatePickerComp } from "../Form";
import { useState } from "react";
import { AUTH_URL } from "@/constants";
import { useRouter } from "next/navigation";

const defaultValues = {
  fullName: "",
  email: "",
  password: "",
  gender: "",
  birthDate: new Date(),
};

const SignupForm = () => {
  const router = useRouter();
  const [date, setDate] = useState<Date | null>(new Date());
  const [serverError, setServerError] = useState<string | null>(null);
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;
  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await fetch(`${AUTH_URL}register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw Error(error);
      }
      router.push("/test");
    } catch (error) {
      reset();
      setServerError(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div>
        {serverError && (
          <p className="text-red-500 me-auto text-center">{serverError}</p>
        )}
      </div>
      <div className="flex flex-col gap-6 w-full">
        <RHFTextField
          name="fullName"
          label="Full Name"
          type="text"
          placeholder="john2002"
        />
        <RHFTextField
          name="email"
          label="Email"
          type="email"
          placeholder="johen@gmail.com"
        />
        <RHFTextField
          name="password"
          label="Password"
          type="password"
          placeholder="********"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <CustomSelect label="Gender" options={["Male", "Female"]} />
          <DatePickerComp
            label="Date of Birth"
            startDate={date ?? new Date()}
            onChange={(date) => setDate(date)}
          />
        </div>
        <div className="flex gap-6 items-center justify-center">
          <button
            type="submit"
            className="bg-[linear-gradient(90deg,#ff0000,#800000)] hover:scale-105 transition-all duration-150 rounded-full px-12 py-2 sm:text-sm"
          >
            Signup
          </button>
          <Link
            href={"/"}
            className="bg-transparent rounded-full px-12 py-2 sm:text-sm border border-white hover:scale-105 transition-all duration-150"
          >
            Cancel
          </Link>
        </div>
      </div>
    </FormProvider>
  );
};

export default SignupForm;
