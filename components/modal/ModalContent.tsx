import React from 'react'
import Button from '../Button'

const ModalContent = ({ onCancel, onAction, actionLabel, actionIcon, actionDescription }: any) => {
    return (
        <div className='w-md h-48 flex flex-col justify-between'>
            <div className='flex gap-4'>
                <div className='flex flex-row justify-center items-center p-2 gap-1 w-10 h-10 bg-neutral-600/40 rounded-lg'>
                    {actionIcon}
                </div>
                <div>
                    <h2>{actionLabel}</h2>
                    <p>{actionDescription}</p>
                </div>
            </div>
            <hr />
            <div className='flex items-center justify-end gap-2 w-full'>
                <Button type='neutral' onClick={onCancel}>Cancel</Button>
                <Button type='primary' onClick={onAction}>{actionLabel}</Button>
            </div>
        </div>
    )

    
}

export default ModalContent