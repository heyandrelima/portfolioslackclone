import styled from 'styled-components';
import { DefaultStyledComponentProps } from '../../themes';
import { ComponentProps, LabelProps } from './index';

export const StyledComponent = styled.div<ComponentProps>`
    {
        cursor: pointer;
        background-color: ${(props: ComponentProps) => props.selected ? props.theme.backgroundColorDarker : 'transparent'};
        color: ${(props: ComponentProps) => props.theme.fontColorLight};
        padding: 0.6em 1em 0.6em 32px;
        font-family: ${(props: ComponentProps) => props.theme.fontFamily};
        display: flex;
        flex-flow: row;
        align-items: center;

        &:hover {
            background-color: ${(props: ComponentProps) => props.theme.backgroundColorDarker};
        }
    }
`;

export const Label = styled.span<LabelProps>`
    margin-left: 16px;
    font-weight: ${(props: LabelProps) => props.highlight ? 'bold' : 'normal'};
`;

export const Bubble = styled.div`
    {
        height: 24px;
        width: 24px;
        background-color: ${(props: DefaultStyledComponentProps) => props.theme.errorColor};
        color: ${(props: DefaultStyledComponentProps) => props.theme.fontColorLight};
        text-align: center;
        font-size: 12px;
        border-radius: 50%;
        line-height: 24px;
        margin-left: 8px;
    }
`;
