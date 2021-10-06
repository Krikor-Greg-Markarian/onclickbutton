import React from "react";
import cn from "classnames";

function Wale3a(props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={cn("border-2 p-2 mt-20", {
          "border-red-300": props.isSelected,
        })}
      >
        {props.wale3a}
      </button>
    </div>
  );
}

export default Wale3a;
