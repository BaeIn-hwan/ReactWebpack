import type { InputHTMLAttributes } from "react";

type InputTypes = "text" | "date";

export interface IPropsInput {
  type?: InputTypes | string;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  placeholder?: string;
  maxlength?: number;
  disabled?: boolean;
  onFocus?: Function;
  onBlur?: Function;
  onInput?: Function;
  onChange?: Function;
}
