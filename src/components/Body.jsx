import React, { useEffect, useState, useRef } from "react";
import { Editor, EditorState } from 'draft-js';

import "../styles/body.css";

export default function Body() {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const editor = useRef(null);

    function focusEditor() {
        editor.current.focus();
    }

    useEffect(() => {
        focusEditor()
    }, []);

    console.log(editorState)

    return (
        <div className="container">
            <div className="left-container">
                <div onClick={focusEditor}>
                    <Editor
                        ref={editor}
                        editorState={editorState}
                        onChange={editorState => setEditorState(editorState)}
                    />
                </div>
            </div>
            <div className="right-container">
                right
            </div>
        </div>
    );
}