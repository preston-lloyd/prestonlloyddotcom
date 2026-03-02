"use client";

import { Dialog, DialogContent, DialogOverlay, DialogPortal } from "@radix-ui/react-dialog";

type DrawerProps = {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function Drawer({ children, open, onOpenChange }: DrawerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur z-50" />
        <DialogContent className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-xl z-50 p-4 overflow-y-auto">
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}