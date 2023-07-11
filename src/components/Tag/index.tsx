import * as S from "./styled";

function Tag({ stroke, label }: any): JSX.Element {
  return <S.Tag $stroke={stroke}>{label}</S.Tag>;
}

export default Tag;
