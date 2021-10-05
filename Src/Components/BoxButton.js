import React, { useState } from "react";
import cn from "classnames";

function BoxButton(props) {
  return (
    <div>
      <div
        onClick={props.onClick}
        className={cn("border-2 p-2", { "border-blue-400": props.isSelected })}
      >
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default BoxButton;
