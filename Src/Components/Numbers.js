import React from "react";
import cn from "classnames";

function Numbers(props) {
  return (
    <div>
      <p className={cn("inline pl-2")}>{props.leftNumber}</p>
      <p className={cn("inline pl-40")}>{props.rightNumber}</p>
    </div>
  );
}

export default Numbers;
