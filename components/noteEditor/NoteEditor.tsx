"use client";
import React, { useEffect, useState } from 'react'
import TagSVG from "@/app/images/icon-tag.svg"
import ClockSVG from "@/app/images/icon-clock.svg"
import Tiptap from '../tiptap/Tiptap'
import { Note } from '../types'
import Button from '../Button';

const NoteEditor = ({ currentNote }: { currentNote: Note | undefined }) => {


    const [noteTitle, setNoteTitle] = useState("");
    const [noteTags, setNoteTag] = useState("");
    const [editorText, setEditorText] = useState("");


    useEffect(() => {
        if (currentNote) {
            setNoteTitle(currentNote?.title || "");
            setNoteTag(currentNote?.tags.join(",") || "");
            setEditorText(currentNote?.description || "");
        }
    }, [currentNote])


    const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNoteTitle(e.target.value);
    }

    const tagsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNoteTag(e.target.value);
    }

    const onChange = ({ editor }: any) => {
        setEditorText(editor.getHTML());
    }

    const onSubmit = () => {
        console.log("submitting data");
    }

    const onCancel = () => {
        setEditorText(currentNote?.description || "");
    }

    return (
        <div className='w-full'>
            <input type="text" value={noteTitle} onChange={titleChangeHandler} className='editor-input text-base' />

            <div className='flex flex-col w-full'>
                <div className='w-full grid grid-cols-2 my-2'>
                    <span className='flex items-center gap-2'><TagSVG /> Tags</span>
                    {/* <TagsEditor tags={currentNote?.tags?.join(",") || ""} /> */}
                    <input type="text" value={noteTags} onChange={tagsChangeHandler} className='editor-input text-base' />
                </div>
                <div className='w-full grid grid-cols-2 my-2'>
                    <span className='flex items-center gap-2'><ClockSVG /> Last edited</span>
                    <p>{currentNote?.created_at ? currentNote.created_at : "Not yet saved"}</p>
                </div>
                <hr />
            </div>
            <div className='scrollbar h-[55vh] max-h-[60vh] overflow-scroll w-full'>
                <Tiptap content={editorText} onChange={onChange} />
            </div>
            <hr />

            <div className='flex gap-5'>
                <Button type='primary' onClick={onSubmit}>
                    Save Note
                </Button>
                <Button type='border' onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}

export default NoteEditor