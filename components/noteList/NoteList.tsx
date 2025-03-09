import React from 'react'
import Button from '../Button'
import PlusSVG from "@/app/images/icon-plus.svg"
import NoteItem from '../NoteItem'

const NoteList = ({ notesList, currentNote, onClickNote }: any) => {

    return (
        <div className="flex flex-col items-start border-r border-neutral-600 p-4 w-1/4">
            <Button type="primary" onClick={() => { }}>
                <PlusSVG />
                Create New Note
            </Button>

            <div className="flex flex-col gap-5 mt-4 scrollbar overflow-y-auto">
                {
                    notesList.length
                        ? notesList.map((item: any, key: number) => (
                            <NoteItem {...item} key={key} active={(currentNote?.id === item?.id)} onClick={onClickNote} />
                        ))
                        :
                        <div className="flex flex-col bg-neutral-100 dark:bg-neutral-800 p-2 rounded-lg h-fit gap-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, perspiciatis?
                        </div>
                }
            </div>
        </div>
    );

}

export default NoteList