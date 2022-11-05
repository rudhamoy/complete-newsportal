import React from 'react'
import videoIcon from '../../assets/icons/video-icon.svg';
import cartoon from '../../assets/images/cartoon.png';
function CategoryListItem() {
    return (
        <>
            <div className="p-4 rounded-md border bg-white">
                <div className="flex sm:flex-row flex-col gap-x-2">
                    <div className=" relative">
                        <img className="w-[660px] h-[170px] rounded-sm" src={cartoon} alt="" />

                        <div className="absolute  z-[10] bottom-2 sm:left-6  left-2 flex flex-row justify-start gap-2 items-center">
                            <img src={videoIcon} width={15} height={15} className="text-[#ffd200] font-bold" alt="" />
                            <div className="capitalize text-[12px] text-[#ffd200]  font-bold">NOVEMBER 2, 2022</div>
                        </div>

                    </div>
                    <div className="relative">
                        <p className="text-xs font-semibold text-[#bf912d]">TV SERIES</p>
                        <h3 className="text-[16px] sm:text-[18px] font-futura2 font-semibold">The Fabulous Season 1: Release Date Update And What We Know</h3>
                        <p className='text-gray-500 text-[14.55px] hidden sm:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sequi necessitatibus ullam, ab et nihil voluptatum modi esse rem illo, ipsa, eum ipsum.</p>
                        <p className="text-xs absolute bottom-1 sm:block hidden">NOVEMBER 2, 2022</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CategoryListItem