import React from "react";
import cn from "classnames";

function TextBlueBorder(props) {
  return (
    <div
      onClick={props.onClick}
      className={cn("border-2 p-2 w-2/12 mt-12", {
        "border-blue-400": props.isSelected,
      })}
    >
      <p className={cn("text-center")}>{props.text}</p>
    </div>
  );
}

export default TextBlueBorder;
