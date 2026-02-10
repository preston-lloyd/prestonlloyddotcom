import { Slot } from "@radix-ui/react-slot";
import { ReactElement } from "react";

type ChildProps = { className?: string } & Record<string, unknown>;

type ContainerProps = {
    children: ReactElement<ChildProps>;
    className?: string;
    asChild?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Container({ children, className = "", asChild = false, ...props }: ContainerProps) {
    const containerClassName = `max-w-7xl mx-auto ${className}`
    const Component = asChild ? Slot : "div";

    return (
        <Component className={containerClassName} {...props}>
            {children}
        </Component>
    )
}