import { render } from '@testing-library/react';
import Message from '../';
import { DisplayTime } from '../../../services/datetime';
import { Author } from '../../../types/api';
import { Props } from '../types';

describe('ui/message', () => {
    const author: Author = {
        name: 'André Lima',
        avatar: 'https://andrelima.space/avatar.jpg',
    };
    const props: Props = {
        message: {
            id: '0',
            author,
            createdAt: new Date('2021-03-07 11:32:32'),
            body: 'Hello world!',
        },
    };

    test('should render correct author avatar', () => {
        const component = render(<Message {...props} />);
        const src = component.getByAltText('avatar').getAttribute('src');
        expect(src).toBe(author.avatar);
    });
    test('should render correct author name', async () => {
        const component = render(<Message {...props} />);
        const authorElement = component.getByTestId('author').textContent;
        expect(authorElement).toBe(author.name);
    });
    test('should render correct message date', () => {
        const component = render(<Message {...props} />);
        const expectedFormattedDate: string = DisplayTime(props.message.createdAt);
        const time = component.getByTestId('time').textContent;
        expect(time).toBe(expectedFormattedDate);
    });
    test('should render correct message text', () => {
        const component = render(<Message {...props} />);
        const message = component.getByTestId('message').textContent;
        expect(message).toBe(props.message.body);
    });
});
