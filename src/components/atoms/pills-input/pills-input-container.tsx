import React, { useState } from "react";
import { PillsInputContainerProps } from "./types";

export const PillsInputContainer = (props: PillsInputContainerProps) => {
  const { children, ...rest } = props;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={`p-2 flex gap-2 rounded-md items-center min-w-[300px] flex-wrap ${
        isFocused
          ? "border-[2px] border-blue-400"
          : "border-[2px] border-zinc-200 hover:border-zinc-500"
      }`}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
