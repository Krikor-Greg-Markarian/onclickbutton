import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import cn from "classnames";

export default function ArrayTwoBox(props) {
  return (
    <div>
      <div>
        <p>{props.text}</p>

        {props.listItems.map((item, idx) => (
          <li>{item.text}</li>
        ))}

        <button
          onClick={props.topButton}
          className={cn("border-2 p-1", { "border-red-300": props.isSelected })}
        >
          {props.cancel}
        </button>
        <br></br>
        <button
          onClick={props.buttomButton}
          className={cn("border-2 p-1", { "border-red-300": props.isSelected })}
        >
          {props.ok}
        </button>
      </div>
    </div>
  );
}
