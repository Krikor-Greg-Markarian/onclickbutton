import React from "react";
import cn from "classnames";
import ListItem from "./ListItem";

function List(props) {
  return (
    <div className={cn("pt-4")}>
      <div className={cn("border-2")}>
        <p className={cn("p-2")}>{props.text}</p>

        {props.items.map((item, idx) => (
          <ListItem
          key={idx}
            text={item.text}
            buttonName={item.buttonName}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
