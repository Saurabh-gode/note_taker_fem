import React from 'react'
import SearchSVG from "@/app/images/icon-search.svg";

const Input = () => {
    return (
        <div className="flex items-center p-1 m-2 border border-neutral-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <div className="text-gray-500 block">
                <SearchSVG />
            </div>
            <input
                type="text"
                placeholder="Search by title, content, or tags..."
                className="border-none active:border-none text-xs"
            />
        </div>
    )
}

export default Input