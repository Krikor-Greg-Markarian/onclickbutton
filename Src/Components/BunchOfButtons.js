import React from "react";
import ButtonsOfThree from "./ButtonsOfThree";
import cn from "classnames";

function BunchOfButtons(props) {
  return (
    <div>
      <div className={cn("grid grid-cols-3")}>
        {props.items.map((item, idx) => (
          <div className={cn("col-span-1")}>
            <ButtonsOfThree
              key={idx}
              buttonName={item.buttonName}
              onClick={item.onClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BunchOfButtons;
