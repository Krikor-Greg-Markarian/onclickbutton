import React from 'react'
import cn from 'classnames'

function TextBlueBorder(props) {
    return (
        <div className = {cn("border-2 p-2", {"border-blue-400" : props.isSelected})}>
            <p>{props.text}</p>
        </div>
    )
}

export default TextBlueBorder
