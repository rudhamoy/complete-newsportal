

import React from 'react'
import FeaturedPost from './FeaturedPost'

function FeaturedContainer() {
    return (
        <>
            <div className="w-full h-full bg-slate-500 flex flex-row gap-2 justify-center p-4">
                <FeaturedPost />
                <div className='h-[22.5rem] bg-blue-200 w-[641px]'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default FeaturedContainer