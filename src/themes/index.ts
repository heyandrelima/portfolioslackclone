export type Theme = {
    backgroundColorLight: string;
    backgroundColorDark: string;
    backgroundColorDarker: string;
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
    backgroundColorLight: '#FFFFFF',
    backgroundColorDark: '#3E103F',
    backgroundColorDarker: '#2B092A',
    fontFamily: 'Arial, sans-serif',
    fontColorLight: '#FFFFFF',
    fontColorDark: '#555',
    fontColorDarker: '#000',
    errorColor: '#c33759',
};
