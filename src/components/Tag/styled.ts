import styled, { css } from "styled-components";

export const Tag = styled.span<{ $stroke?: boolean }>`
  padding: 2px 5px;
  ${({ $stroke }) =>
    $stroke &&
    css`
      border: 1px solid red;
    `};
`;
