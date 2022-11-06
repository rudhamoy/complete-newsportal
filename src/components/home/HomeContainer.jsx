import React from 'react'
import FeaturedContainer from '../featured_hero/FeaturedContainer';
import HotspotSlider from './HotspotSlider';
function HomeContainer() {
    return (
        <div className="sm:mx-40 mx-2">
            <FeaturedContainer />
            <HotspotSlider />
        </div>
    )
}

export default HomeContainer