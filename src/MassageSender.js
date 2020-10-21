import { Avatar } from '@material-ui/core'
import React from 'react'
import "./MassageSender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MassageSender() {

    const handleSubmit = e => {
        e.preventDefault();
    }; 



    return (
        <div className="massageSender">
            <div className="massageSender_top">
                <Avatar />
                <form>
                    <input
                    className="massageSender_input"
                    placeholder={`What's on your mind?`}/>
                    <input placeholder="image URL(optional)"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="massageSender_bottum">
                <div className="massageSender_option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="massageSender_option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="massageSender_option">
                    <InsertEmoticonIcon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}


export default MassageSender
