import styled from 'styled-components';
import { DefaultStyledComponentProps } from '../../themes';
import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
    width: 100%;
    padding: 4px 4px ${(props: ContainerProps) => props.menuHeight}px 4px;
    border: 1px solid;
    position: relative;

    .DraftEditor-root {
        max-height: 40vh;
        overflow-y: auto;
    }
`;

export const MenuContainer = styled.div<DefaultStyledComponentProps>`
    border-top: ${(props: DefaultStyledComponentProps) => props.theme.borderColorDark} 1px solid;
    background: ${(props: DefaultStyledComponentProps) => props.theme.backgroundColorLight};
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 0.4rem;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const LeftMenu = styled.div``;

export const RightMenu = styled.div``;

export const MenuBtn = styled.button<DefaultStyledComponentProps>`
    background: none;
    border: none;
    margin: 0 0.2rem;
    cursor: pointer; 
    font-size: 1.2rem;
    color: ${(props: DefaultStyledComponentProps) => props.theme.fontColorDark};
`;
