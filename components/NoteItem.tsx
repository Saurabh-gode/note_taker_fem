import React from 'react'

const NoteItem = ({ title, tags, created_at }: any) => {
    return (

        <div className="flex flex-col bg-neutral-100 dark:bg-neutral-800 p-2 rounded-lg h-fit gap-3">
            <h2>{title}</h2>
            <div className="flex gap-2">
                {
                    tags.map((tag: string, idx: number) => {
                        return <span key={idx} className="tag">{tag}</span>;
                    })
                }
            </div>
            <h4>{created_at}</h4>
        </div>

    )
}

export default NoteItem