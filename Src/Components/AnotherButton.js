import React, { useState } from "react";
import cn from "classnames";

function AnotherButton(props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      onClick={() => {
        props.onClick();
        setIsClicked(!isClicked);
      }}
      className={cn("border-2 p-1 ml-12 mt-4", {
        "border-red-400": isClicked,
      })}
    >
      {props.buttonName}
    </button>
  );
}

export default AnotherButton;
