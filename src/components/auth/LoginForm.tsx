"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FormProvider from "../../components/hook-form/FormProvider";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { LoginSchema } from "@/lib/validation";
import { AUTH_URL } from "@/constants";

interface LoginFormData {
  email: string;
  password: string;
  afterSubmit?:string
}

const LoginForm = () => {
  const router = useRouter();

  const methods = useForm<LoginFormData>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await fetch(`${AUTH_URL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw Error(error)
      }

      router.push('/pages')

    } catch (error) {
      reset();
      setError("afterSubmit", {
        type: "manual",
        message: error instanceof Error ? error.message : "An error occurred",
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center">
        {!!errors.afterSubmit && (
          <p className="text-red-500 me-auto text-start">
            {errors.afterSubmit.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-6 w-full">
        <RHFTextField name="email" label="Email" type="email" placeholder="john@gmail.com" />
        <RHFTextField name="password" label="Password" type="password" placeholder="********" />
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
            href="/"
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
