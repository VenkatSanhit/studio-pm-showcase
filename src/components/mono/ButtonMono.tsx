import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "ghost" };

const ButtonMono: React.FC<Props> = ({ children, className = "", variant = "default", ...props }) => {
  const base = "inline-flex items-center justify-center px-4 py-2 text-sm border-border mono-btn font-medium";
  return (
    <button
      {...props}
      className={`${base} ${className} ${variant === "ghost" ? "bg-transparent" : "bg-background"} focus:outline-none`}
    >
      {children}
    </button>
  );
};

export default ButtonMono;
