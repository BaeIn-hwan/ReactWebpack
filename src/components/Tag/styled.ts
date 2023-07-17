import styled, { css } from "styled-components";
import * as I from "./interface";

const tagTheme: any = {
  white: {
    bgColor: "var(--base-white)",
    color: "var(--base-black)",
  },
  lightGray: {
    bgColor: "#f2f3f5",
    color: "#373530",
  },
  gray: {
    bgColor: "#f1f1ef",
    color: "#787774",
  },
  brown: {
    bgColor: "#f3eeee",
    color: "#976D57",
  },
  orange: {
    bgColor: "#f8ecdf",
    color: "#cc772f",
  },
  yellow: {
    bgColor: "#faf3dd",
    color: "#c29243",
  },
  green: {
    bgColor: "#eef3ed",
    color: "#548064",
  },
  blue: {
    bgColor: "#e9f3f7",
    color: "#477da5",
  },
  purple: {
    bgColor: "#f6f3f8",
    color: "#a48bbe",
  },
  pink: {
    bgColor: "#f9f2f5",
    color: "#b35588",
  },
  red: {
    bgColor: "#faecec",
    color: "#c4554d",
  },
};

const small = css`
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 12px;
`;

const medium = css`
  padding: 4px 6px;
  border-radius: 5px;
  font-size: 14px;
`;

export const Tag = styled.span<I.IStyledTag>`
  display: inline-block;
  ${({ $stroke, theme = "white" }) =>
    $stroke &&
    css`
      border: 1px solid
        ${theme === "white"
          ? `${tagTheme[theme].color}`
          : `${tagTheme[theme].color}59`};
    `}
  ${({ $size }) => ($size === "small" ? small : medium)}
  background: ${({ theme = "white" }) => tagTheme[theme].bgColor};
  color: ${({ theme = "white" }) => tagTheme[theme].color};
  line-height: 1;
`;
