import React, { useEffect, useState } from "react";
import { PopoverProps } from "./types";
import { createPortal } from "react-dom";

export const Popover = (props: PopoverProps) => {
  const { children, targetId } = props;

  const [popoverPosition, setPopoverPosition] = useState<DOMRect | null>(null);

  useEffect(() => {
    const targetElement = document.getElementById(targetId);
    const boundaries = targetElement?.getBoundingClientRect();
    if (boundaries) setPopoverPosition(boundaries);
    const resizeObserver = new ResizeObserver(() => {
      const targetElement = document.getElementById(targetId);
      const boundaries = targetElement?.getBoundingClientRect();
      if (boundaries) setPopoverPosition(boundaries);
    });

    resizeObserver.observe(targetElement as HTMLElement);
    return () => {
      resizeObserver.unobserve(targetElement as HTMLElement);
    };
  }, []);

  return createPortal(
    <div
      className="absolute shadow-lg rounded-sm overflow-hidden min-w-[200px]"
      style={{
        top: Number(popoverPosition?.bottom) + 8,
        left: popoverPosition?.left,
      }}
    >
      {children}
    </div>,
    document.body
  );
};
