import React from 'react';
import ChevRon from "@/app/images/icon-chevron-right.svg";

const MenuItem = ({ icon, content, active, className = "" }: any) => {
    return (
        <div className={`flex justify-between w-full ${className} `}>
            <div className='flex items-center gap-2'>
                {icon}
                {content}
            </div>
            <span>{active && <ChevRon />}</span>
        </div>
    )
}

export default MenuItem