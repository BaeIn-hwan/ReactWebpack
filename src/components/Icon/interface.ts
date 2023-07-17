import type { ReactElement } from "react";

export interface IPropsIcon {
  width: number;
  height: number;
  viewBox?: string;
  color?: string;
  children: ReactElement;
}
