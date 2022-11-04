

import React from 'react'
import featured from '../../assets/images/featured.jpg';
function FeaturedPost() {
    return (
        <div className="h-[508px] bg-white w-[641px]">
            <div className="h-[361px] w-[641px] overflow-hidden">
                <img width={641} height={361} src={featured} alt="" />
                <div className="capitalize text-[12px] color-[#ffd200]">TV SERIES</div>
            </div>
            <div className="pt-[7px] pb-[12px] px-[14px]">
                <h3 className="text-[25.5px] font-semibold">Kung Fu Panda: The Dragon Knight Season 2 Potential Release Date and More</h3>
                <p>Kung Fu Panda: THe Dragon Knight Season 2 has already not been announced and here we have its Expected Release Data, Cast and possible Plot info</p>
            </div>
        </div>
    )
}

export default FeaturedPost