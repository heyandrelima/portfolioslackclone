import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../themes';

type Props = {
    theme: Theme,
    children: React.ReactChild;
}

const ThemeContext: React.FC<Props> = (props: Props) => (
    <ThemeProvider theme={props.theme}>
        {props.children}
    </ThemeProvider>
);

export default ThemeContext;
