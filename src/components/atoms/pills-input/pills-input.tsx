import React, { Ref, forwardRef } from "react";
import { PillsInputProps } from "./types";

export const PillsInput = forwardRef(
  (props: PillsInputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        className="caret-blue-500 outline-none text-sm text-zinc-500 h-9 flex-grow"
        {...props}
      />
    );
  }
);

PillsInput.displayName = "PillsInput";
