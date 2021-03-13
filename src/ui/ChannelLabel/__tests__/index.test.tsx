import { render } from '@testing-library/react';
import ChannelLabel, { Props } from '../index';

describe('ui/ChannelLabel', () => {
    it('should show the correct label', () => {
        const component = render(<ChannelLabel>channel label</ChannelLabel>);
        const label = component.getByTestId('label-text').textContent;
        expect(label).toBe('channel label');
    });
    it('should show number of unread messages', () => {
        const component = render(<ChannelLabel unreadMessages={5}>unread messages</ChannelLabel>);
        const unreadMsgs = component.getByTestId('notification-bubble').textContent;
        expect(unreadMsgs).toBe('5');
    });
    it('should render 99+ if unread messages are greater than 99', () => {
        const component = render(<ChannelLabel unreadMessages={99}>unread messages</ChannelLabel>);
        const unreadMsgs = component.getByTestId('notification-bubble').textContent;
        expect(unreadMsgs).toBe('99+');
    });
    it('should not show unread messages if number is less than 1', () => {
        const component = render(<ChannelLabel unreadMessages={0}>all clean</ChannelLabel>);
        const notificationBubble = component.getByTestId('notification-bubble');
        expect(!notificationBubble);
    });
});
