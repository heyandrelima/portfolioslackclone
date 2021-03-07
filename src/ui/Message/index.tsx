import React from 'react';
import { DisplayTime } from '../../services/datetime';
import { Props } from './types';

const Message: React.FC<Props> = (props: Props) => (
    <div>
        <img src={props.avatarUrl} alt='avatar' />
        <span data-testid='author'>{props.author}</span>
        <span data-testid='time'>{DisplayTime(props.createdAt)}</span>
        <p data-testid='message'>{props.message}</p>
    </div>
);

export default Message;
