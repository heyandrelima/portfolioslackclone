import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChannelInfo from '../ChannelInfo';
import { Channel } from '../../../types/api';

describe('components/ChannelInfo', () => {
    it('shoud render correctly', () => {
        const channel: Channel = {
            id: 'abc123',
            label: 'announcements',
            description: 'New stuff coming',
        };
        const component = render(<ChannelInfo channelInfo={channel} />).queryByTestId('channel-info');
        expect(component).toMatchSnapshot();
    });
});
