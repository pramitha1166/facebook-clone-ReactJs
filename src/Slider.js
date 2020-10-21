import React from 'react'
import "./Slider.css"
import SliderRow from "./SliderRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Slider() {
    return (
        <div class="slider">
            <SliderRow title="pramitha wanigarathne" src="https://avatars2.githubusercontent.com/u/63492955?s=400&u=c9a9bc192efd91ea667f62b6ef64576416213377&v=4"/>
            <SliderRow title='Covid-19 Information Center' Icon={LocalHospitalIcon}/>
            <SliderRow title='Pages' Icon={EmojiFlagsIcon}/>
            <SliderRow title='Friends' Icon={PeopleIcon}/>
            <SliderRow title='Market Place' Icon={StorefrontIcon}/>
            <SliderRow title='Video' Icon={VideoLibraryIcon}/>
            <SliderRow Icon={ExpandMoreIcon}/>
        </div>
    )
}

export default Slider
