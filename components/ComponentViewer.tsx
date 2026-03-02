"use client";

import { ReactElement } from "react";
import { Dialog, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { Slot } from "@radix-ui/react-slot";

type ComponentViewerProps = {
  children: ReactElement;
  asChild?: boolean;
};

export default function ComponentViewer({ children, asChild = true }: ComponentViewerProps) {
  const Component = asChild ? Slot : "div";

  // Get child props (only when children is a single element)
  const childProps = (children as ReactElement).props as Record<string, unknown>;
  const childClassName = typeof childProps?.className === "string" ? childProps.className : undefined;

  const className = childClassName ? `relative ${childClassName}` : "relative";

  return (
    <Dialog>
      <Component className={className}>
        {children}

        <DialogTrigger asChild>
          <button className="absolute top-0 right-0">
            Toggle
          </button>
        </DialogTrigger>
      </Component>

      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>
            <h2>Component Code</h2>
          </DialogTitle>
          <DialogDescription>
            <code>
              {JSON.stringify(children, null, 2)}
            </code>
          </DialogDescription>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}