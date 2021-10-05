import React from "react";
import cn from "classnames";
import BoxNumberButton from "./BoxNumberButton";
import ListItem from "./ListItem";

function BigBox(props) {
  return (
    <div>
      {props.items.map((item, idx) => (
        <BoxNumberButton
          leftNumber={item.leftNumber}
          rightNumber={item.rightNumber}
          buttonName={item.buttonName}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}

export default BigBox;
