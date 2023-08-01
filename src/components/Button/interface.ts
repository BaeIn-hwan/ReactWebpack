export enum EButtonSize {
  XSMALL = "xs",
  SMALL = "x",
  MEDIUM = "m",
  LARGE = "l",
  XLARGE = "xl",
}

export type ButtonType = "button" | "submit" | "reset";
export type ButtonSize =
  | EButtonSize.XSMALL
  | EButtonSize.SMALL
  | EButtonSize.MEDIUM
  | EButtonSize.LARGE
  | EButtonSize.XLARGE;

export interface IPropsButton {
  href?: string;
  type?: ButtonType;
  text: string | number;
  color?: string;
  size?: ButtonSize;
  onClick?: Function;
}

export interface IStyledButton {
  $size?: ButtonSize;
  $color: string;
}
