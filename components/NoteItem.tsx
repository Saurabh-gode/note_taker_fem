import React from 'react'
import { Note } from './types';

type NoteItemProps = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    created_at: string;
    onClick: (e: Note) => void;
    active: boolean;
};

const NoteItem = (props: NoteItemProps) => {

    const { id, title, tags, description, created_at, onClick, active } = props;
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onClick({ id, title, created_at, tags, description } as Note);
    }

    return (
        <>
            <div
                className={`flex flex-col ${active ? "dark:bg-neutral-800" : ""} pt-2 px-2 rounded-lg h-fit gap-3`}
                onClick={clickHandler}
            >
                <h2>{title}</h2>
                <div className="flex gap-2">
                    {
                        tags.map((tag: string, idx: number) => {
                            return <span key={idx} className="tag">{tag}</span>;
                        })
                    }
                </div>
                <h4>{created_at}</h4>
                <span className='seperator' />
            </div >
        </>


    )
}

export default NoteItem