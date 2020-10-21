import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SliderRow.css"

function SliderRow({src, Icon, title}) {
    return (
        <div className="sliderrow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SliderRow
