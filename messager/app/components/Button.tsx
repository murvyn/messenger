"use client";
import clsx from "clsx";
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disable?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  danger,
  disable,
  fullWidth,
  onClick,
  secondary,
  type,
}) => {
  return <button
  onClick={onClick}
  type={type}
  disabled={disable}
  className={clsx(``)}>
    {children}
  </button>
};

export default Button;
