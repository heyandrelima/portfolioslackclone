import { render } from '@testing-library/react';
import Message from '../';
import { DisplayTime } from '../../../services/datetime';
import { Props } from '../types';

describe('ui/message', () => {
    const props: Props = {
        author: 'André Lima',
        avatarUrl: 'https://andrelima.space/avatar.jpg',
        createdAt: new Date('2021-03-07 11:32:32'),
        message: 'Hello world!',
    };
    
    test('should render correct author avatar', () => {
        const component = render(<Message {...props} />);
        const src = component.getByAltText('avatar').getAttribute('src');
        expect(src).toBe(props.avatarUrl);
    });
    test('should render correct author name', async () => {
        const component = render(<Message {...props} />);
        const author = component.getByTestId('author').textContent;
        expect(author).toBe(props.author);
    });
    test('should render correct message date', () => {
        const component = render(<Message {...props} />);
        const expectedFormattedDate: string = DisplayTime(props.createdAt);
        const time = component.getByTestId('time').textContent;
        expect(time).toBe(expectedFormattedDate);
    });
    test('should render correct message text', () => {
        const component = render(<Message {...props} />);
        const message = component.getByTestId('message').textContent;
        expect(message).toBe(props.message);
    });
});
