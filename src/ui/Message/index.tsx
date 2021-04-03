import React from 'react';
import { DisplayTime } from '../../services/datetime';
import { MessageContainer, LeftColumn, RightColumn, AvatarContainer, AvatarImg, Top, Author, Time, MessageText } from './styles';
import { Props } from './types';

const Message: React.FC<Props> = (props: Props) => {
    const { message } = props;
    return (
        <MessageContainer>
            <LeftColumn>
                <AvatarContainer>
                    <AvatarImg src={message.author.avatar} alt='avatar' />
                </AvatarContainer>
            </LeftColumn>
            <RightColumn>
                <Top>
                    <Author data-testid='author'>{message.author.name}</Author>
                    <Time data-testid='time'>{DisplayTime(message.createdAt)}</Time>
                </Top>
                <MessageText data-testid='message'>{message.body}</MessageText>
            </RightColumn>
        </MessageContainer>
    );
};

export default Message;
