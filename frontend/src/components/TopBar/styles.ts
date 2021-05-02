import styled from 'styled-components';
import { DefaultStyledComponentProps } from '../../themes';

export const StyledContainer = styled.div<DefaultStyledComponentProps>`
    font-family: ${(props: DefaultStyledComponentProps) => props.theme.fontFamily};
    color: ${(props: DefaultStyledComponentProps) => props.theme.fontColorLight};
    background: ${(props: DefaultStyledComponentProps) => props.theme.backgroundColorDarker};
    text-align: center;
    padding: 0.4em 1em;
`;
