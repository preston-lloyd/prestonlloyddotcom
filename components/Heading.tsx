import { Slot } from "@radix-ui/react-slot";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  size?: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  asChild?: boolean;
}

const sizes = {
  "xl": "text-lg lg:text-xl",
  "2xl": "text-lg lg:text-2xl",
  "3xl": "text-xl lg:text-3xl",
  "4xl": "text-2xl lg:text-4xl",
  "5xl": "text-3xl lg:text-5xl",
  "6xl": "text-4xl lg:text-6xl",
  "7xl": "text-5xl lg:text-7xl",
  "8xl": "text-6xl lg:text-8xl",
  "9xl": "text-7xl lg:text-9xl",
}

export default function Heading({ children, className = "", size = "2xl", asChild = false }: HeadingProps) {
  const headingClassName = `${sizes[size]} text-stone-100 font-medium ${className}`;
  const Component = asChild ? Slot : "h2";

  return (
    <Component className={headingClassName}>
      {children}
    </Component>
  )
}