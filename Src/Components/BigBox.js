import React from "react";
import BoxNumberButton from "./BoxNumberButton";

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
