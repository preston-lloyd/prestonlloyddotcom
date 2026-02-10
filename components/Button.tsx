import { Slot } from "@radix-ui/react-slot";
import { ReactElement } from "react";

type ButtonProps = {
    children: ReactElement;
    className?: string;
    asChild?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className = "", asChild = false, ...props }: ButtonProps) {
    const buttonClassName = `px-4 py-2 bg-blue-500 text-white rounded-md ${className}`;
    const Component = asChild ? Slot : "button";
    
    return (
        <Component className={buttonClassName} {...props}>
            {children}
        </Component>
    )
}