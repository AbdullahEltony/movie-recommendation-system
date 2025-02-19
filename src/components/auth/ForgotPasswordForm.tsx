"use client";
import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import Link from "next/link";
import * as yup from "yup";

const ForgotPasswordForm = () => {
  const methods = useForm({
    resolver: yupResolver(
      yup.object().shape({
        email: yup
          .string()
          .required("Email is required")
          .email("Email must be a valid email address"),
      })
    ),
    defaultValues: {
      email: "",
    },
  });

  const {
    // reset,
    // setError,
    handleSubmit,
    // formState: { errors },
  } = methods;
  const onSubmit = async (data: { email: string }) => {
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

        <div className="flex gap-6 items-center justify-center">
          <button
            type="submit"
            className="bg-[linear-gradient(90deg,#ff0000,#800000)] hover:scale-105 transition-all duration-150 rounded-full px-12 py-2 sm:text-sm"
          >
            Reset My Password
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

export default ForgotPasswordForm;
