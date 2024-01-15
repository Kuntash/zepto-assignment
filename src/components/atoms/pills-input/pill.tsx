import React from "react";
import { PillProps } from "./types";
import { XMarkIcon } from "@/icons/x-mark/x-mark";

export const Pill = (props: PillProps) => {
  const { _id, imageUrl, imageAlt, label, onDelete, highlighted } = props;
  return (
    <div
      className={`flex rounded-full items-center bg-zinc-200 ${
        highlighted ? "border border-blue-500" : "border transparent"
      }`}
    >
      {/* Icon / image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        className="h-[36px] w-[36px] rounded-full"
        alt={imageAlt}
      />

      <div className="p-1 flex items-center">
        <span className="text-sm text-zinc-500">{label}</span>

        <button className="" onClick={onDelete} tabIndex={-1}>
          <XMarkIcon className="w-6 h-6 text-zinc-500" />
        </button>
      </div>
    </div>
  );
};
