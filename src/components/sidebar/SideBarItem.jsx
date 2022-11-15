import React from 'react'
import videoIcon from '../../assets/icons/video-icon.svg';
function SideBarItem({ category, title, image }) {
    return (

        <div className="flex flex-row items-center p-2 cursor-pointer rounded-[2px] w-[90vw] sm:w-[383px] h-[108px] z-0 border">
            <div className="h-[85px] w-[85px] overflow-hidden rounded-sm relative">
                <img className="h-[100%] w-[100%]" src={image} alt="" />
                <div className="absolute  z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-1 items-center drop-shadow-3xl ">
                    <img src={videoIcon} width={15} height={15} className="text-[#ffd200] font-bold" alt="" />
                    {/* <div className="capitalize text-[8px] text-[#ffd200] font-nunitoSans  font-bold">NOVEMBER 2, 2022</div> */}
                </div>
            </div>
            <div className="px-2 relative h-[80px] w-[250px]">
                <p className="font-futura2 text-[#bf912d] font-bold text-[10px] capitalize">{category}</p>
                <p className="font-nunitoSans text-[16px] leading-5 text-black font-semibold">
                    {title}
                </p>
            </div>
        </div>

    )
}

export default SideBarItem