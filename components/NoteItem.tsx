import React from 'react'

const NoteItem = ({ id, title, tags, created_at, onClick, active }: any) => {

    const clickHandler = (e: any) => {
        e.stopPropagation();
        onClick({ id, title, tags, created_at, onClick });
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