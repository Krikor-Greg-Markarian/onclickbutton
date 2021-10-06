import React from "react";
import cn from "classnames";

function ButtonsOfThree(props) {
  return (
    <div>
      <button onClick={props.onClick} className={cn("border-2 p-2")}>
        {props.buttonName}
      </button>
    </div>
  );
}

export default ButtonsOfThree;
