import React from 'react';
import { FaHashtag } from 'react-icons/fa';
import { DefaultStyledComponentProps } from '../../themes';
import { StyledComponent, Label, Bubble } from './styles';

export type Props = {
    children?: string | string[];
    unreadMessages?: number;
    selected?: boolean;
}

export type ComponentProps = DefaultStyledComponentProps & {
    selected?: boolean;
};

export type LabelProps = DefaultStyledComponentProps & {
    highlight?: boolean;
};

const ChannelLabel: React.FC<Props> = (props: Props) => (
    <StyledComponent>
        <FaHashtag />
        <Label data-testid='label-text' highlight={props.unreadMessages && props.unreadMessages > 0 ? true : false}>{props.children}</Label>
        {
            props.unreadMessages && props.unreadMessages > 0 &&
            <Bubble data-testid='notification-bubble'>{props.unreadMessages > 99 ? '99+' : props.unreadMessages}</Bubble>
        }
    </StyledComponent>
);

export default ChannelLabel;
