import React from "react";
import cn from "classnames";

function NumbersAlphabet(props) {
  return (
    <div className = {cn("mt-5")}>
      <p className = {cn("border-2 w-2/12 inline p-2")}>{props.number1}</p>
      <p className = {cn("border-2 w-2/12 inline p-2")}>{props.number2}</p>
      <p className = {cn("border-2 w-2/12 inline p-2")}>{props.number3}</p>
    </div>
  );
}

export default NumbersAlphabet;
