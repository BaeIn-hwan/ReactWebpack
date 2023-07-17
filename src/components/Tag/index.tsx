import * as S from "./styled";
import * as I from "./interface";

function Tag(props: I.IPropsTag) {
  const { stroke = false, label = "", theme = "white", size = "small" } = props;

  return (
    <S.Tag $stroke={stroke} theme={theme} $size={size}>
      {label}
    </S.Tag>
  );
}

export default Tag;
