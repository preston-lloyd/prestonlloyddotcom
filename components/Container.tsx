import { Slot } from "@radix-ui/react-slot";
import { ReactElement } from "react";

type ChildProps = { className?: string } & Record<string, unknown>;

type ContainerProps = {
  children?: ReactElement<ChildProps> | ReactElement<ChildProps>[];
  size?: "sm" | "md" | "lg";
  className?: string;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const sizes = {
  sm: "max-w-5xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
}

export default function Container({ children, className = "", asChild = false, size = "md", ...props }: ContainerProps) {
  const containerClassName = `mx-auto px-4 ${sizes[size]} ${className}`
  const Component = asChild ? Slot : "div";

  return (
    <Component className={containerClassName} {...props}>
      {children}
    </Component>
  )
}