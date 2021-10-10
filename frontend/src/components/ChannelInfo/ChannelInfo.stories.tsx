import ThemeContext from '../../context/Theme';
import { defaultTheme } from '../../themes';
import { Channel } from '../../types/api';
import ChannelInfo from './ChannelInfo';

const Story = {
    title: 'Components/ChannelInfo',
    component: ChannelInfo,
};

export const Default = () => {
    const channel: Channel = {
        id: 'abc123',
        label: 'announcements',
        description: 'New stuff coming',
    };
    return (
        <ThemeContext theme={defaultTheme}>
            <ChannelInfo channelInfo={channel} />
        </ThemeContext>
    );
};

export default Story;
