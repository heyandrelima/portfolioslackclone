import { useState } from 'react';
import ThemeContext from '../../context/Theme';
import { defaultTheme } from '../../themes';
import RichTextEditor from './index';
import MenuBar from './MenuBar';

const Story = {
    title: 'UI/RichTextEditor',
    component: RichTextEditor,
};

export const Default = () => {
    return (
        <ThemeContext theme={defaultTheme}>
            <RichTextEditor />
        </ThemeContext>
    );
};

export const MenuBarOnly = () => {
    const [hideFormatting, setHideFormatting] = useState<boolean>(false);

    function onToggleHideFormatting(shouldHide: boolean): void {
        setHideFormatting(shouldHide);
    }

    return (
        <ThemeContext theme={defaultTheme}>
            <MenuBar hideFormatting={hideFormatting} onToggleHideFormatting={onToggleHideFormatting} />
        </ThemeContext>
    );
};

export default Story;
