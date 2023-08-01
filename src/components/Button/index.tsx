import React from "react";

import * as I from "./interface";
import * as S from "./styled";

const title = "typescript";

function Button(props: I.IPropsButton) {
  const {
    href,
    type = "button",
    text,
    color,
    size = I.EButtonSize.MEDIUM,
    onClick,
  } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick && typeof onClick === "function") {
      onClick(e);
    }
  };

  if (href && href.length) {
    return (
      <S.LinkButton to={href} $size={size}>
        {text}
      </S.LinkButton>
    );
  }

  return (
    <S.Button type={type} $size={size} onClick={handleClick}>
      {text}
    </S.Button>
  );
}

export default Button;
