import React from 'react';
import { Message as MessageType } from '../../types/api';
import Message from '../../ui/Message';
import { Props } from './types';
import { Container } from './styles';

const ChannelMessages: React.FC<Props> = (props: Props) => (
    <Container data-testid='channel-messages'>
        {props.messages.map((message: MessageType, index: number) => (
            <Message message={message} key={index} />
        ))}
    </Container>
);

export default ChannelMessages;
