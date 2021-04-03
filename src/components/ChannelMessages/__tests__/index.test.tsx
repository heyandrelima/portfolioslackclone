import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChannelMessages from '../';
import { Author, Message } from '../../../types/api';

describe('components/ChannelMessages', () => {
    it('shoud render correctly', () => {
        const author: Author = {
            name: 'Admin',
            avatar: '/avatar.jpg',
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
        const component = render(<ChannelMessages messages={messages} />).queryByTestId('channel-messages');
        expect(component).toMatchSnapshot();
    });
});
