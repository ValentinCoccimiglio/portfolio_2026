import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
      rounded-xl
      bg-blue-600
      px-6
      py-3
      font-medium
      transition-all
      duration-300
      hover:bg-blue-700
      hover:scale-105
      active:scale-95
      "
    >
      {children}
    </button>
  );
}