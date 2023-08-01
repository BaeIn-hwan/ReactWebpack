import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import * as I from "./interface";

const ButtonSize = {
  [I.EButtonSize.XSMALL]: {
    padding: "5px 6px",
    fontSize: `11px`,
  },
  [I.EButtonSize.SMALL]: {
    padding: "8px",
    fontSize: `12px`,
  },
  [I.EButtonSize.MEDIUM]: {
    padding: "8px 10px",
    fontSize: `12px`,
  },
  [I.EButtonSize.LARGE]: {
    padding: "10px",
    fontSize: `14px`,
  },
  [I.EButtonSize.XLARGE]: {
    padding: "10px 12px",
    fontSize: `14px`,
  },
};

export const Button = styled.button<{
  $size?: I.ButtonSize;
  $color?: string;
}>`
  ${({ $size }) => {
    console.log($size);
    return css`
      ${$size ? ButtonSize[$size] : null}
    `;
  }}
`;

export const LinkButton = styled(Link)<{
  $size?: I.ButtonSize;
  $color?: string;
}>`
  display: flex;
  ${(props: any) => `color: ${props.$color}`};
`;
