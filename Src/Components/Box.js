import React from "react";
import cn from "classnames";

function Box(props) {
  return (
    <div className={cn("mt-10")}>
      <p className={cn("inline border-2 p-3")}>{props.one}</p>
      <p className={cn("inline border-2 p-3")}>{props.two}</p>
      <p className={cn("inline border-2 p-3")}>{props.three}</p>
    </div>
  );
}

export default Box;
