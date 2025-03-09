"use client";
import React from 'react'
import { TagsEditor, TitleEditor } from '../tiptap/Editor'
import TagSVG from "@/app/images/icon-tag.svg"
import ClockSVG from "@/app/images/icon-clock.svg"
import Tiptap from '../tiptap/Tiptap'
import { Note } from '../types'

const NoteEditor = ({ currentNote }: { currentNote: Note | undefined }) => {
    const onChange = ({editor}: any) => {
        console.log('e', editor.getHTML())
    }
    return (
        <div className='w-full'>
            <TitleEditor title={""} />

            <div className='flex flex-col w-full'>
                <div className='w-full grid grid-cols-2 my-2'>
                    <span className='flex items-center gap-2'><TagSVG /> Tags</span>
                    <TagsEditor tags={currentNote?.tags?.join(",") || ""} />
                </div>
                <div className='w-full grid grid-cols-2 my-2'>
                    <span className='flex items-center gap-2'><ClockSVG /> Last edited</span>
                    <p>Not yet saved</p>
                </div>
                <hr />
            </div>
            <div className='scrollbar h-[55vh] max-h-[60vh] overflow-scroll w-full'>
                <Tiptap content={currentNote?.description} onChange={onChange} />
            </div>
            <hr />
        </div>
    )
}

export default NoteEditor