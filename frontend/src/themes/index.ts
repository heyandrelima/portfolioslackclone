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
}

export type DefaultStyledComponentProps = {
    theme: Theme;
}

export const defaultTheme: Theme = {
    backgroundColorLight: '#FAFAFA',
    backgroundColorLighter: '#FFFFFF',
    backgroundColorDark: '#3E103F',
    backgroundColorDarker: '#2B092A',
    borderColorLight: '#FAFAFA',
    borderColorLighter: '#FFFFFF',
    borderColorDark: '#999999',
    borderColorDarker: '#000000',
    fontFamily: 'Arial, sans-serif',
    fontColorLight: '#FFFFFF',
    fontColorDark: '#555',
    fontColorDarker: '#000',
    errorColor: '#c33759',
};
