import styled from 'styled-components';
import { DefaultStyledComponentProps } from '../../themes';

export const MessageContainer = styled.div<DefaultStyledComponentProps>`
    {
        font-family: ${(props: DefaultStyledComponentProps) => props.theme.fontFamily};
        background-color: transparent;
        padding: 0.2em 0;
        display: flex;
        flex-flow: row;
        align-items: flex-start;
        margin: 1em 0;
    }
`;

export const LeftColumn = styled.div`
    {
        width: 10%;
        max-width: 5em;
        padding: 0 0.4em;

        @media (max-width: 480px) {
            width: 20%;
            max-width: 10em;
        }
    }
`;

export const RightColumn = styled.div`
    {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        padding: 0 0.4em;
    }
`;

export const AvatarContainer = styled.div`
    {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 100%;
    }
`;

export const AvatarImg = styled.img`
    {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`;

export const Top = styled.div`
    {
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }
`;

export const Author = styled.p`
    {
        color: ${(props: DefaultStyledComponentProps) => props.theme.fontColorDarker};
        font-weight: bold;
        font-size: 1.2em;
        margin: 0;
    }
`;

export const Time = styled.p`
    {
        color: ${(props: DefaultStyledComponentProps) => props.theme.fontColorDark};
        font-weight: lighter;
        font-size: 0.8em;
        margin: 0 0 0 0.6em;
    }
`;

export const MessageText = styled.p`
    {
        width: 100%;
        color: ${(props: DefaultStyledComponentProps) => props.theme.fontColorDarker};
        font-weight: normal;
        font-size: 1em;
        margin: 0.4em 0;
    }
`;
