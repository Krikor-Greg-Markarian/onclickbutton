import React from "react";
import cn from "classnames";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} className={cn("border-2 p-1 ")}>
        {props.nameOfTheButton}
      </button>
    </div>
  );
}

export default Button;
