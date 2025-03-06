"use client";
import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import RHFSelectField from "../hook-form/RHFSelectField";
import RHFDatePicker from "../hook-form/RHFDatePicker";
import { RegisterSchema } from "@/lib/validation";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  gender: "Male" | "Female";
  birthDate: Date;
}

const defaultValues = {
  fullName: "",
  email: "",
  password: "",
  gender: undefined,
  birthDate: new Date(),
};

const SignupForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const methods = useForm<SignupFormData>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;
  const onSubmit = async (data: SignupFormData) => {
    
    try {
      const formatedData = {birthDate: data.birthDate ? data.birthDate.toISOString() : null};
      const response = await fetch(`/api/Auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formatedData),
      });
      if (!response.ok) {
        const error = await response.json();
        throw Error(error.title);
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
          <RHFSelectField name='gender' label="Gender" options={["Male", "Female"]} />
          <RHFDatePicker
            name= "birthDate"
            label="Date of Birth"
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
