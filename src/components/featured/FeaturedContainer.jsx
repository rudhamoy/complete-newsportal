

import React from 'react'

import FeaturedPost from './FeaturedPost'
import MasonaryItem from './MasonaryItems'

function FeaturedContainer() {
    return (
        <>
            <div className="w-full h-full sm:flex sm:flex-row gap-2 sm:justify-center">
                <FeaturedPost />
                <div className="grid sm:grid-cols-2 w-full gap-2">
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