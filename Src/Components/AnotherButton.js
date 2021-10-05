import React from 'react'
import cn from 'classnames'

function AnotherButton(props) {
    return (
        <div>
            <button onClick={props.onClick} className = {cn("border-2 p-1 ml-12 mt-4", {"border-blue-400" : props.isSelected})}>{props.buttonName}</button>
        </div>
    )
}

export default AnotherButton
