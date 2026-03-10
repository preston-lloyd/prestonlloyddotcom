"use client";

import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { useState, useEffect } from "react";

const FONTS = [
  "var(--font-ibm-plex-sans)",
  "var(--font-rock-salt)",
  "var(--font-italiana)",
] as const;

const STYLES = [
    "font-bold",
    "italic",
    "!text-yellow-400",
    "lowercase",
    "text-right",
]

type FontSwitcherHeadingProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
};

export default function FontSwitcherHeading({
  children,
  className = "",
  asChild = false,
}: FontSwitcherHeadingProps) {
  const Component = asChild ? Slot : "h2";
  const [fontIndex, setFontIndex] = useState(0);
  const [styleIndex, setStyleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFontIndex((i) => (i + 1) % FONTS.length);
      setStyleIndex((i) => (i + 1) % STYLES.length);
    }, 200);
    return () => {clearInterval(id)};
  }, []);

  return (
    <Component className={`${className} ${STYLES[styleIndex]}`} style={{ fontFamily: FONTS[fontIndex] }}>
      {children}
    </Component>
  );
}
