import React, { MutableRefObject, useRef, useState } from 'react';
import { Container, EditableSpan } from './styles';

const RichTextEditor = () => {
    const editableRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [innerHtml, setInnerHtml] = useState<string>('');
    const [keysPressed, setKeysPressed] = useState<string[]>([]);

    function onKeyUp(e: React.KeyboardEvent<HTMLInputElement>): void {
        const newHtml = e.currentTarget.innerHTML;
        setInnerHtml(newHtml);
        console.log(newHtml);

        // All keys released
        setKeysPressed([]);
    }

    function onKeyDown(e: React.KeyboardEvent): void {
        const currentKey: string = e.key;

        // Execute a shortcut
        if (keysPressed.includes('Control')) {
            // run shortcut
            const selection = window.getSelection()?.toString();
            console.log(selection);
        }
        setKeysPressed([...keysPressed, currentKey]);
    }

    return (
        <Container>
            <EditableSpan ref={editableRef} contentEditable={true} onKeyUp={onKeyUp} onKeyDown={onKeyDown} />
            {keysPressed?.map((keyPressed: string, index: number) => (
                <span key={index}>{keyPressed}</span>
            ))}
        </Container>
    );
};

export default RichTextEditor;
