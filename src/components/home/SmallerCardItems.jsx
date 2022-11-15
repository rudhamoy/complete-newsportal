import React from 'react'
import couplesHug from '../../assets/images/couples_hug.png';
function SmallerCardItems() {
    return (
        <div className="p-2 py-[10px] rounded-[2px] border border-[#e4e4e4] bg-white my-1 cursor-pointer h-[130px] w-[398px]" >
            <div className="flex gap-x-2">
                <div className="h-[108px]  w-[208px]">
                    <img className="w-[100%] h-[100%] rounded-md" src={couplesHug} alt="" />
                </div>
                <div className="relative flex flex-col justify-between">
                    <p className="text-[10px] text-[#bf912d] font-bold">TV SERIES</p>
                    <h2 className="text-[#000000] text-[16px] leading-[18px] font-nunitoSans font-semibold">Bob Hearts Abishola Season 4
                        Release Date, Cast, Plot, and What we know so far
                    </h2>
                    <p className="text-[10px] text-[#737373]">AUGUST 5, 2022</p>
                </div>
            </div>
        </div>
    )
}

export default SmallerCardItems