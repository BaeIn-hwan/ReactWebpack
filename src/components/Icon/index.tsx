import * as I from "./interface";

function Icon(props: I.IPropsIcon) {
  const { width, height, viewBox = "0 0 24 24", color, children } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      style={{ fill: `${color ?? "inherit"}` }}
    >
      {children}
    </svg>
  );
}

export default Icon;
