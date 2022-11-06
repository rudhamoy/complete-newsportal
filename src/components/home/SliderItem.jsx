import React from 'react'

function SliderItem({ category, title, image }) {
    return (
        <div className="flex flex-row items-center cursor-pointer rounded-md w-[400px]  z-0">
            <div className="h-[80px] w-[80px] bg-black overflow-hidden rounded-md">
                <img className="h-[100px]" src={image} alt="" />
            </div>
            <div className="px-2 relative h-[80px] w-[300px]">
                <p className="font-futura2 text-[#ffc700] font-bold text-[14px] capitalize">{category}</p>
                <p className="font-proxima text-[16px] leading-5 text-black font-bold">
                    {title}
                </p>
            </div>
            <div className="w-[1px] rounded bg-[#8c8c8c] h-[80px] mx-4"></div>
        </div>
    )
}

export default SliderItem