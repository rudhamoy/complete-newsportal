

import React from 'react'

import FeaturedPost from './FeaturedPost'
import MasonaryItem from './MasonaryItems'

function FeaturedContainer() {
    return (
        <>
            <div className="w-full h-full bg-slate-200 flex flex-row gap-2 justify-center p-4">
                <FeaturedPost />
                <div className="grid grid-cols-2 gap-2">
                    <MasonaryItem />
                    <MasonaryItem />
                    <MasonaryItem />
                    <MasonaryItem />
                </div>
            </div>
        </>
    )
}

export default FeaturedContainer