import React from 'react'
import moonnight from '../../assets/images/moonnight.jpg';
import { AiOutlinePicRight } from "react-icons/ai";

function MasonaryItem() {
    return (
        <div className="bg-white w-full sm:h-[230px] flex sm:flex-col flex-row">
            <div className="w-full overflow-hidden relative">
                <img src={moonnight} alt="" />
                <div className="absolute z-[10] bottom-2 left-6 flex flex-row justify-start gap-2 items-center">
                    <AiOutlinePicRight className="text-[#ffd200] font-bold" />
                    <div className="capitalize text-[12px] text-[#ffd200]  font-bold">TV SERIES</div>
                </div>
            </div>
            <div className="p-[7px]">
                <h3 className="text-[16px] leading-5 font-bold">Moon Knight Season 2 Production started at Cairo teased by Oscar Isaac</h3>
            </div>
        </div>
    )
}

export default MasonaryItem