import * as S from "./styled";

function Tag({ stroke, text }: any): JSX.Element {
  console.log(stroke);
  return <S.Tag $stroke={stroke}>{text}</S.Tag>;
}

export default Tag;
