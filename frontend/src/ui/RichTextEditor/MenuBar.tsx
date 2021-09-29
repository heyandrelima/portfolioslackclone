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
    toggleHideFormatting: (hideFormatting: boolean) => void;
    toggleInlineStyle: (inlineStyle: string) => void;
    toggleBlockType: (blockType: string) => void;
    onResize: (newHeight: number) => void;
    className?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ hideFormatting, toggleHideFormatting, toggleInlineStyle, toggleBlockType, onResize, className }: MenuBarProps) => {
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

    return (
        <MenuContainer className={className} ref={componentRef}>
            {
                !hideFormatting &&
                <LeftMenu>
                    <MenuBtn title='Bold' data-testid='bold-button' onClick={() => toggleInlineStyle('bold')}>
                        <AiOutlineBold />
                    </MenuBtn>
                    <MenuBtn title='Italic' data-testid='italic-button' onClick={() => toggleInlineStyle('italic')}>
                        <AiOutlineItalic />
                    </MenuBtn>
                    <MenuBtn title='Strikethrough' data-testid='strikethrough-button' onClick={() => toggleInlineStyle('strikethrough')}>
                        <AiOutlineStrikethrough />
                    </MenuBtn>
                    <MenuBtn title='Inline code' data-testid='inlinecode-button' onClick={() => toggleInlineStyle('code')}>
                        <BsCodeSlash />
                    </MenuBtn>
                    <MenuBtn title='Hyperlink' data-testid='link-button'>
                        <AiOutlineLink />
                    </MenuBtn>
                    <MenuBtn title='Ordered list' data-testid='orderedlist-button' onClick={() => toggleBlockType('ordered-list-item')}>
                        <AiOutlineOrderedList />
                    </MenuBtn>
                    <MenuBtn title='Unordered list' data-testid='unorderedlist-button' onClick={() => toggleBlockType('unordered-list-item')}>
                        <AiOutlineUnorderedList />
                    </MenuBtn>
                    <MenuBtn title='Block quote' data-testid='blockquote-button' onClick={() => toggleBlockType('blockquote')}>
                        <BsBlockquoteLeft />
                    </MenuBtn>
                    <MenuBtn title='Block code' data-testid='blockcode-button' onClick={() => toggleBlockType('code-block')}>
                        <AiOutlineCode />
                    </MenuBtn>
                </LeftMenu>
            }
            <RightMenu>
                <MenuBtn title={hideFormatting ? 'Show formatting' : 'Hide formatting'} data-testid='toggleformatting-button'
                    onClick={() => toggleHideFormatting(!hideFormatting)}>
                    <AiOutlineFontSize />
                </MenuBtn>
                <MenuBtn title='Mention someone' data-testid='mention-button' disabled={true}>
                    <GoMention />
                </MenuBtn>
                <MenuBtn title='Emoji' data-testid='emoji-button' disabled={true}>
                    <GrEmoji />
                </MenuBtn>
                <MenuBtn title='Attach a file' data-testid='attach-button' disabled={true}>
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
