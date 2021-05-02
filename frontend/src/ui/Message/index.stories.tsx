import React from 'react';
import ThemeContext from '../../context/Theme';
import { defaultTheme } from '../../themes';
import { Author } from '../../types/api';
import Message from './index';
import { Props } from './types';

const Story = {
    title: 'UI/Message',
    component: Message,
};

export const Default = () => {
    const author: Author = {
        name: 'André Lima',
        avatar: 'http://andrelima.space/static/media/profile.285b1009.jpeg',
    };
    const createdAt: Date = new Date();
    const props: Props = {
        message: {
            id: '123',
            author,
            createdAt,
            body: 'Hello world!',
        },
    };
    return (
        <ThemeContext theme={defaultTheme}>
            <Message {...props} />
        </ThemeContext>
    );
};

export default Story;
