import styled from "styled-components";
import { Link } from "react-router-dom";

export const FloatingHome = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  right: 10px;
  bottom: 10px;
  width: 40px;
  height: 40px;
  border: 2px solid var(--system-gray-200);
  border-radius: 50%;
  fill: var(--system-gray-600);
  transition: background 0.4s;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
