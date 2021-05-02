import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 200px;
    border: 1px solid;
`;

export const EditableSpan = styled.span`
    user-select: text;

    &:focus-visible {
        border: none;
        outline: none;
    }
`;
