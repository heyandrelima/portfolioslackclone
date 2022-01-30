export type Theme = {
  backgroundColorLight: string;
  backgroundColorLighter: string;
  backgroundColorDark: string;
  backgroundColorDarker: string;
  borderColorLight: string;
  borderColorLighter: string;
  borderColorDark: string;
  borderColorDarker: string;
  fontFamily: string;
  fontColorLight: string;
  fontColorDark: string;
  fontColorDarker: string;
  errorColor: string;
  spacing: Array<number>;
  fontSizes: Array<number>;
};

export type DefaultStyledComponentProps = {
  theme: Theme;
};

export const defaultTheme: Theme = {
  backgroundColorLight: "#FAFAFA",
  backgroundColorLighter: "#FFFFFF",
  backgroundColorDark: "#3E103F",
  backgroundColorDarker: "#2B092A",
  borderColorLight: "#FAFAFA",
  borderColorLighter: "#FFFFFF",
  borderColorDark: "#999999",
  borderColorDarker: "#000000",
  fontFamily: "Arial, sans-serif",
  fontColorLight: "#FFFFFF",
  fontColorDark: "#555",
  fontColorDarker: "#000",
  errorColor: "#c33759",
  spacing: [2, 4, 8, 16],
  fontSizes: [8, 12, 16, 24, 32],
};
