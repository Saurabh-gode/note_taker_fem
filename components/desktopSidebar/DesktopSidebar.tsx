import React from 'react'
import Logo from '../Logo'
import MenuItem from '../MenuItem'
import TagSVG from "@/app/images/icon-tag.svg"
import HomeSVG from "@/app/images/icon-home.svg";
import ArchiveSVG from "@/app/images/icon-archive.svg";

const DesktopSidebar = () => {
    return (
        <section className="flex flex-row items-start border-r border-neutral-600 h-screen">
            <div
                className="flex flex-col sidebar-container gap-4 "
            >
                <div className='h-20 py-6'>
                    <Logo />
                </div>
                <div className='flex flex-col gap-4'>
                    <MenuItem
                        icon={<HomeSVG />}
                        content="All Notes"
                        active
                    />
                    <MenuItem
                        icon={<ArchiveSVG />}
                        content="Archive Notes"
                    />
                    <hr />
                    <div className="gap-1">
                        <h4 className="text-neutral-400 mb-4">Tags</h4>
                        <div className='flex flex-col gap-4'>
                            <MenuItem
                                icon={<TagSVG />}
                                content="Lorem ipsum. sit amet"
                            />
                            <MenuItem
                                icon={<TagSVG />}
                                content="Lorem ipsum. sit amet"
                            />
                            <MenuItem
                                icon={<TagSVG />}
                                content="Lorem ipsum. sit amet"
                            />
                            <MenuItem
                                icon={<TagSVG />}
                                content="Lorem ipsum. sit amet"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DesktopSidebar