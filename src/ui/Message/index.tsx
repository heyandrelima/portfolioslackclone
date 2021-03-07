import React from 'react';
import { DisplayTime } from '../../services/datetime';
import { MessageContainer, LeftColumn, RightColumn, AvatarContainer, AvatarImg, Top, Author, Time, MessageText } from './styles';
import { Props } from './types';

const Message: React.FC<Props> = (props: Props) => (
    <MessageContainer>
        <LeftColumn>
            <AvatarContainer>
                <AvatarImg src={props.avatarUrl} alt='avatar' />
            </AvatarContainer>
        </LeftColumn>
        <RightColumn>
            <Top>
                <Author data-testid='author'>{props.author}</Author>
                <Time data-testid='time'>{DisplayTime(props.createdAt)}</Time>
            </Top>
            <MessageText data-testid='message'>{props.message}</MessageText>
        </RightColumn>
    </MessageContainer>
);

export default Message;
