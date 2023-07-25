interface IPropsButton {
  text: string | number;
  color: string;
  size: "xs" | "s" | "m" | "l" | "xl";
  onClick: Function;
}

function Button(props: IPropsButton) {
  const { text, color, size, onClick } = props;
  return <button type="button">버튼</button>;
}

export default Button;
