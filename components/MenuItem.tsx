import React from 'react';
import chevRon from "@/app/images/icon-chevron-right.svg";

const MenuItem = ({ icon, content, active }: any) => {
    return (
        <div className=''>
            {icon}
            {content}
            {active && chevRon}
        </div>
    )
}

export default MenuItem