import React from 'react'
import cn from 'classnames'

function AnotherButton(props) {
    return (
        <div>
            <button onClick={props.onClick} className = {cn("border-2 p-1")}>{props.buttonName}</button>
        </div>
    )
}

export default AnotherButton
