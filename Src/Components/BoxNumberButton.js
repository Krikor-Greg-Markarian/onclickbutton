import React from "react";
import cn from "classnames";
import AnotherButton from "./AnotherButton";

function BoxNumberButton(props) {
  return (
    <div className={cn("border-2 w-3/12 p-2 mt-2")}>
      <p className={cn("inline")}>{props.leftNumber}</p>
      <p className={cn("inline pl-40")}>{props.rightNumber}</p>
      <AnotherButton buttonName={props.buttonName} onClick={props.onClick} />
    </div>
  );
}

export default BoxNumberButton;
