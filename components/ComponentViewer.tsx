"use client";

import { useState, cloneElement, ReactElement, ReactNode, Children } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Drawer from "./Drawer";

type ComponentViewerProps = {
  children: ReactElement;
};

export default function ComponentViewer({ children }: ComponentViewerProps) {
  const [open, setOpen] = useState(false);

  const trigger = (
    <button
      key="component-viewer-trigger"
      type="button"
      className="absolute -top-1.5 -right-1.5 cursor-pointer bg-stone-100 text-stone-400 rounded-full p-1"
      onClick={() => setOpen(!open)}
    >
      <MagnifyingGlassIcon className="w-4 h-4" />
    </button>
  );

  const existingClassName = (children.props as Record<string, unknown>).className;
  const mergedClassName =
    typeof existingClassName === "string"
      ? `relative ${existingClassName}`.trim()
      : "relative";

  const existingProps = (children.props || {}) as Record<string, unknown>;
  const child = cloneElement(children, {
    ...existingProps,
    className: mergedClassName,
    children: [...Children.toArray(existingProps.children as ReactNode), trigger],
  } as Record<string, unknown>);

  const displayProps = (({ children, ...props }: Record<string, unknown>) => props)(existingProps)

  return (
    <>
      {child}

      <Drawer open={open} onOpenChange={setOpen}>
        <code className="text-sm">
          {JSON.stringify(displayProps, null, 2)}
        </code>
      </Drawer>
    </>
  );
}