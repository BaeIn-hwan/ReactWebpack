import type { InputHTMLAttributes } from "react";

type InputType = "text" | "date";
export interface IPropsInput {
  type?: InputType | string;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  placeholder?: string;
  maxlength?: number;
  disabled?: boolean;
  onFocus?: Function | undefined;
  onBlur?: Function;
  onInput?: Function;
  onChange?: Function;
}
