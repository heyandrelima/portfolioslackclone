import React from 'react';
import ThemeContext from '../../context/Theme';
import { defaultTheme } from '../../themes';
import Message from './index';
import { Props } from './types';

const Story = {
    title: 'UI/Message',
    component: Message,
};

export const Default = () => {
    const createdAt: Date = new Date();
    const props: Props = {
        author: 'André Lima',
        avatarUrl: 'http://andrelima.space/static/media/profile.285b1009.jpeg',
        createdAt,
        message: 'Hello world!',
    };
    return (
        <ThemeContext theme={defaultTheme}>
            <Message {...props} />
        </ThemeContext>
    );
};

export default Story;
