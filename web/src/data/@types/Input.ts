import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputType = "text" | "email" | "password" | "url";

export type InputTypeProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: InputType;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  onBlur?: (e: any) => void;
  disabled?: boolean;
};