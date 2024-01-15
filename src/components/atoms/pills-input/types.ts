import { ReactNode } from "react";

export type PillsInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type PillsInputContainerProps = {
  children: ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type PillProps = {
  imageUrl: string;
  label: string;
  highlighted?: boolean;
  _id?: string | number;
  onDelete?: () => void;
  imageAlt?: string;
};

export type PopoverProps = {
  targetId: string;
  children: ReactNode;
};

export type UserOptionProps = {
  imageUrl: string;
  label: string;
  imageAlt?: string;
  onSelect?: () => void;
};
