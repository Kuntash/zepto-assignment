import React from "react";
import { UserOptionProps } from "./types";

export const UserOption = (props: UserOptionProps) => {
  const { imageUrl, label, imageAlt, onSelect } = props;
  return (
    <button
      className="flex gap-2 p-2 items-center hover:bg-zinc-100 w-full"
      onMouseDown={onSelect}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageUrl} alt={imageAlt} className="h-10 w-10 rounded-full" />
      <span className="text-sm text-zinc-500">{label}</span>
    </button>
  );
};
