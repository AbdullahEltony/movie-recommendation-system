"use client";
import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { LoginSchema } from "@/lib/validation";
import Link from "next/link";

const LoginForm = () => {
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    // reset,
    // setError,
    handleSubmit,
    // formState: { errors },
  } = methods;
  const onSubmit = async (data: { email: string; password: string }) => {
    console.log(data);
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6 w-full">
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
        <Link
          href="/auth/forgot-password"
          className="text-lg text-center font-normal duration-300 hover:text-primary w-fit mx-auto my-4"
        >
          Forgot Password?
        </Link>
        <div className="flex gap-6 items-center justify-center">
          <button
            type="submit"
            className="bg-[linear-gradient(90deg,#ff0000,#800000)] hover:scale-105 transition-all duration-150 rounded-full px-12 py-2 sm:text-sm"
          >
            Login
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

export default LoginForm;
