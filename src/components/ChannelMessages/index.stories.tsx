import ThemeContext from '../../context/Theme';
import { defaultTheme } from '../../themes';
import { Author, Message } from '../../types/api';
import ChannelMessages from './index';

const Story = {
    title: 'Components/ChannelMessages',
    component: ChannelMessages,
};

export const Default = () => {
    const author: Author = {
        name: 'Admin',
        avatar: 'http://andrelima.space/static/media/profile.285b1009.jpeg',
    };
    const messages: Message[] = [
        {
            id: 'abc',
            author,
            body: 'Hello everyone!',
            createdAt: new Date('2021-01-01 16:00:00'),
        },
        {
            id: 'def',
            author,
            body: 'Second message',
            createdAt: new Date('2021-01-01 16:01:00'),
        },
        {
            id: 'ab12',
            author,
            body: 'Last message',
            createdAt: new Date('2021-01-01 16:05:00'),
        },
    ];
    return (
        <ThemeContext theme={defaultTheme}>
            <ChannelMessages messages={messages} />
        </ThemeContext>
    );
};

export default Story;
