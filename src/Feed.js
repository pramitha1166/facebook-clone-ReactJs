import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MassageSender from "./MassageSender"

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MassageSender />
            {/* MassageSender */}
        </div>
    )
}

export default Feed
