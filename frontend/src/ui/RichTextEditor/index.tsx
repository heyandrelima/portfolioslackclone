import React, { useState } from 'react';
import { DraftEditorCommand, DraftHandleValue, Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import MenuBar from './MenuBar';
import { Container, StyledEditor } from './styles';

type Props = {
}

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

    function onClickBold(event: React.MouseEvent): void {
        event.preventDefault();
        const newState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
        setEditorState(newState);
    }

    function onToggleHideFormating(newValue: boolean): void {
        setHideFormatting(newValue);
    }

    function onResize(newHeight: number): void {
        setMenuHeight(newHeight);
    }

    return (
        <Container menuHeight={menuHeight}>
            <Editor editorState={editorState} onChange={onChangeEditor} handleKeyCommand={handleKeyCommand} />
            <MenuBar hideFormatting={hideFormatting} onToggleHideFormatting={onToggleHideFormating} onResize={onResize} />
        </Container>
    );
};

export default RichTextEditor;
