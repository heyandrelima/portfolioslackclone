import ThemeContext from '../../context/Theme';
import { defaultTheme } from '../../themes';
import ChannelLabel from './index';

const Story = {
    title: 'UI/ChannelLabel',
    component: ChannelLabel,
};

export const Default = () => {
    return (
        <ThemeContext theme={defaultTheme}>
            <div style={{ backgroundColor: defaultTheme.backgroundColorDark, height: '300px', width: '600px' }}>
                <ChannelLabel>channel label</ChannelLabel>
                <ChannelLabel unreadMessages={3}>unread msgs</ChannelLabel>
                <ChannelLabel unreadMessages={300}>inbox already full</ChannelLabel>
                <ChannelLabel selected={true}>selected channel</ChannelLabel>
            </div>
        </ThemeContext>
    );
};

export default Story;
