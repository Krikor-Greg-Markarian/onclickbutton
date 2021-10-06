import React from "react";
import cn from "classnames";
import AnotherButton from "./AnotherButton";
import Numbers from "./Numbers";

function BoxNumberButton(props) {
  return (
    <div className={cn("border-2 w-3/12 p-2 mt-2")}>
      <Numbers  leftNumber={props.leftNumber} rightNumber={props.rightNumber} />

      <AnotherButton  buttonName={props.buttonName} onClick={props.onClick} />
    </div>
  );
}

export default BoxNumberButton;
