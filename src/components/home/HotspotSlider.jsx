import React, { useState } from 'react'
import girlboobs from '../../assets/images/girlboobs.png'
import beardman from '../../assets/images/beard-man.png';
import SliderItem from './SliderItem';
import rightArrowIcon from '../../assets/icons/right-arrow-icon.svg';
import leftArrowIcon from '../../assets/icons/left-arrow-icon.svg';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';



function HotspotSlider() {


    const carousalContainer = document.getElementsByClassName('carousal-container');

    // console.log(carousalContainer[0].clientWidth);
    const nextSlide = (e) => {
        e.preventDefault();

        let width = carousalContainer[0].clientWidth;
        carousalContainer[0].scrollLeft = carousalContainer[0].scrollLeft - width;
        console.log(width);

    }

    const prevSlide = (e) => {
        e.preventDefault();
        let width = carousalContainer[0].clientWidth;
        carousalContainer[0].scrollLeft = carousalContainer[0].scrollLeft + width;
        console.log(width);
    }

    return (
        <div className="sm:h-[145px] h-[300px] w-[100%] bg-[#ffffff] mt-4 rounded-lg z-[1] relative">
            <div className="flex justify-between rounded-tl-lg">
                <div className="flex items-center gap-x-2 relative  w-[160px] overflow-hidden rounded-tl-lg" >
                    <p className="text-[#ffffff] text-[20px] z-[1] px-[10px]">HOT SPOT</p>
                    <div className="h-[30px] w-[160px] bg-[#ffc700] absolute top-0 left-[-10px] skew-x-[-18deg]"></div>
                </div >
                <div className="sm:flex hidden gap-x-1 items-center">
                    <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
                    <div className="h-[3px] w-10 bg-[#ffc700] rounded"></div>
                    <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
                </div>
                <div className="w-[160px]"></div>
            </div>
            <div onClick={prevSlide} className="absolute cursor-pointer top-[45%] left-2 p-2  rounded-full bg-white shadow-xl border-gray-500 z-[1]">
                <FiChevronLeft className="text-[25px] text-[#bf912d] " />
            </div>
            <div className="flex p-2 relative  w-[100%] overflow-hidden scroll-smooth overflow-x-scroll carousal-container scrollbar-hide">

                <div className="flex">
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                </div>


            </div>
            <div onClick={nextSlide} className="absolute cursor-pointer  right-2 top-[45%] p-2  rounded-full bg-white shadow-xl border-gray-500">
                <FiChevronRight className="text-[25px] text-[#bf912d]" />
            </div>
            <div className="flex sm:hidden gap-x-1 items-center mx-[40%]">
                <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
                <div className="h-[3px] w-10 bg-[#bf912d] rounded"></div>
                <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
            </div>
        </div>
    )
}

export default HotspotSlider


