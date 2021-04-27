import ThemeContext from '../../context/Theme';
import { defaultTheme } from '../../themes';
import TopBar from './index';

const Story = {
    title: 'Components/TopBar',
    component: TopBar,
};

export const Default = () => {
    return (
        <ThemeContext theme={defaultTheme}>
            <TopBar />
        </ThemeContext>
    );
};

export default Story;
