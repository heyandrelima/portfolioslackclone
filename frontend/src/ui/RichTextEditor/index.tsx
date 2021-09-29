import React, { useState } from 'react';
import { DraftEditorCommand, DraftHandleValue, Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import MenuBar from './MenuBar';
import { Container } from './styles';

type Props = {}

const RichTextEditor: React.FC<Props> = (props: Props) => {
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
    const [hideFormatting, setHideFormatting] = useState<boolean>(false);
    const [menuHeight, setMenuHeight] = useState<number>(40);

    function onChangeEditor(newState: EditorState): void {
        setEditorState(newState);
    }

    function handleKeyCommand(command: DraftEditorCommand, currentEditorState: EditorState): DraftHandleValue {
        const newState = RichUtils.handleKeyCommand(currentEditorState, command);

        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    function toggleHideFormating(newValue: boolean): void {
        setHideFormatting(newValue);
    }

    function toggleInlineStyle(inlineStyle: string): void {
        const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
        setEditorState(newState);
    }

    function toggleBlockType(blockType: string): void {
        const newState = RichUtils.toggleBlockType(editorState, blockType);
        setEditorState(newState);
    }

    function onResize(newHeight: number): void {
        setMenuHeight(newHeight);
    }

    return (
        <Container menuHeight={menuHeight}>
            <Editor editorState={editorState} onChange={onChangeEditor} handleKeyCommand={handleKeyCommand} />
            <MenuBar hideFormatting={hideFormatting} toggleHideFormatting={toggleHideFormating}
                toggleInlineStyle={toggleInlineStyle} toggleBlockType={toggleBlockType} onResize={onResize} />
        </Container>
    );
};

export default RichTextEditor;
