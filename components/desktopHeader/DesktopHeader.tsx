import React from 'react'
import Input from '../Input'
import Button from '../Button'
import SettingSVG from "@/app/images/icon-settings.svg"
import Logo from '../Logo'

const DesktopHeader = () => {
    return (
        <>
            <div className='flex items-center w-full h-20 px-4 gap-8'>
                <div className='flex items-center justify-between w-full'>
                    <h1>All Notes</h1>

                    <div className='flex gap-6'>
                        <Input />
                        <Button onClick={() => { }}>
                            <SettingSVG />
                        </Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DesktopHeader