import React from 'react'
import girlboobs from '../../assets/images/girlboobs.png'
import beardman from '../../assets/images/beard-man.png';
import SliderItem from './SliderItem';





function HotspotSlider() {
    return (
        <div className="sm:h-[145px] h-[300px] w-[100%] bg-[#ffffff] mt-4 rounded-lg z-[1]">
            <div className="flex justify-between rounded-tl-lg">
                <div className="flex items-center gap-x-2 relative  w-[160px] overflow-hidden rounded-tl-lg" >
                    <p className="text-[#ffffff] text-[20px] z-[1] px-[10px]">HOT SPOT</p>
                    <div className="h-[30px] w-[160px] bg-[#ffc700] absolute top-0 left-[-10px] skew-x-[-18deg]"></div>
                </div >
                <div className="flex gap-x-1 items-center">
                    <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
                    <div className="h-[3px] w-10 bg-[#ffc700] rounded"></div>
                    <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
                </div>
                <div className="w-[160px]"></div>
            </div>

            <div className="flex p-2 relative">
                <div className="absolute bg-slate-400 top-10 left-0">Arrow Left</div>
                <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                <div className="absolute bg-slate-400 right-0 top-10">Arrow Right</div>
            </div>
        </div>
    )
}

export default HotspotSlider


