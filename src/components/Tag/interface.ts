type TagTheme =
  | "white"
  | "lightGray"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";

type TagSize = "small" | "medium";

export interface IPropsTag {
  label: string;
  stroke?: boolean;
  theme?: TagTheme;
  size?: TagSize;
}

export interface IStyledTag {
  $stroke?: boolean;
  theme?: TagTheme;
  $size: TagSize;
}
