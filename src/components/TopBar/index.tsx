import React from 'react';
import { DefaultStyledComponentProps } from '../../themes';
import { StyledContainer } from './styles';

const TopBar: React.FC<DefaultStyledComponentProps> = () => {
    return (
        <StyledContainer>
            Andre Lima - Front-end Developer
        </StyledContainer>
    );
};

export default TopBar;
