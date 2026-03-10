import { Slot } from "@radix-ui/react-slot";
import { ReactElement } from "react";

type ButtonProps = {
  children: ReactElement;
  className?: string;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className = "", asChild = false, ...props }: ButtonProps) {
  const buttonClassName = `inline-flex text-center uppercase font-medium tracking-widest px-4 py-2 bg-yellow-500/70 hover:bg-yellow-500 border border-yellow-500 text-white rounded-md transition ${className}`;
  const Component = asChild ? Slot : "button";

  return (
    <Component className={buttonClassName} {...props}>
      {children}
    </Component>
  );
}