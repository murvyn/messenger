"use client";
import Input from "@/app/components/inputs/Input";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVarient = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // Register
    }
    if (variant === "LOGIN") {
      // Login
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    //social sign in
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              errors={errors}
              id="name"
              label="Name"
              register={register}
              type="text"
            />
            )}
            <Input
              errors={errors}
              id="email"
              label="Email address"
              register={register}
              type="email"
            />
            <Input
              errors={errors}
              id="password"
              label="Password"
              register={register}
              type="password"
            />
            
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
