import React, { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import {
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineStrikethrough,
    AiOutlineLink,
    AiOutlineOrderedList,
    AiOutlineUnorderedList,
    AiOutlineCode,
    AiOutlineFontSize,
} from 'react-icons/ai';
import { BsCodeSlash, BsBlockquoteLeft } from 'react-icons/bs';
import { GoMention } from 'react-icons/go';
import { GrEmoji, GrAttachment } from 'react-icons/gr';
import { IoSend } from 'react-icons/io5';
import { MenuContainer, LeftMenu, RightMenu, MenuBtn } from './styles';

type MenuBarProps = {
    hideFormatting: boolean;
    onToggleHideFormatting: (hideFormatting: boolean) => void;
    onResize: (newHeight: number) => void;
    className?: string;
}

const MenuBar: React.FC<MenuBarProps> = (props: MenuBarProps) => {
    const { hideFormatting, onResize } = props;
    const componentRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    const onResizeWindow = useCallback(() => {
        if (componentRef && componentRef.current) {
            const newHeight: number = componentRef.current.offsetHeight;
            onResize(newHeight);
        }
    }, [onResize]);

    useEffect(() => {
        window.addEventListener('resize', onResizeWindow);

        return () => {
            window.removeEventListener('resize', onResizeWindow);
        };
    }, [onResizeWindow]);

    function onToggleHideFormatting(): void {
        props.onToggleHideFormatting(!hideFormatting);
    }

    return (
        <MenuContainer className={props.className} ref={componentRef}>
            {
                hideFormatting ? null :
                    <LeftMenu>
                        <MenuBtn title='Bold' data-testid='bold-button'>
                            <AiOutlineBold />
                        </MenuBtn>
                        <MenuBtn title='Italic' data-testid='italic-button'>
                            <AiOutlineItalic />
                        </MenuBtn>
                        <MenuBtn title='Strikethrough' data-testid='strikethrough-button'>
                            <AiOutlineStrikethrough />
                        </MenuBtn>
                        <MenuBtn title='Inline code' data-testid='inlinecode-button'>
                            <BsCodeSlash />
                        </MenuBtn>
                        <MenuBtn title='Hyperlink' data-testid='link-button'>
                            <AiOutlineLink />
                        </MenuBtn>
                        <MenuBtn title='Ordered list' data-testid='orderedlist-button'>
                            <AiOutlineOrderedList />
                        </MenuBtn>
                        <MenuBtn title='Unordered list' data-testid='unorderedlist-button'>
                            <AiOutlineUnorderedList />
                        </MenuBtn>
                        <MenuBtn title='Block quote' data-testid='blockquote-button'>
                            <BsBlockquoteLeft />
                        </MenuBtn>
                        <MenuBtn title='Block code' data-testid='blockcode-button'>
                            <AiOutlineCode />
                        </MenuBtn>
                    </LeftMenu>
            }
            <RightMenu>
                <MenuBtn title={hideFormatting ? 'Show formatting' : 'Hidden formatting'} data-testid='toggleformatting-button'
                    onClick={onToggleHideFormatting}>
                    <AiOutlineFontSize />
                </MenuBtn>
                <MenuBtn title='Mention someone' data-testid='mention-button'>
                    <GoMention />
                </MenuBtn>
                <MenuBtn title='Emoji' data-testid='emoji-button'>
                    <GrEmoji />
                </MenuBtn>
                <MenuBtn title='Attach a file' data-testid='attach-button'>
                    <GrAttachment />
                </MenuBtn>
                <MenuBtn title='Send message' data-testid='send-button'>
                    <IoSend />
                </MenuBtn>
            </RightMenu>
        </MenuContainer>
    );
};

export default MenuBar;
