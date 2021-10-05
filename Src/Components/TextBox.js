import React from "react";
import cn from "classnames";

function TextBox(props) {
  return (
    <div>
      <p>{props.text}</p>
      <button
        onClick={props.onClickTop}
        className={cn("border-2 p-2", { "border-red-200": props.isSelected })}
      >
        Click me
      </button>
      <div></div>
      <button
        onClick={props.onClickBottom}
        className={cn("border-2 p-2", { "border-green-200": props.isSelected })}
      >
        Click me
      </button>
    </div>
  );
}

export default TextBox;
