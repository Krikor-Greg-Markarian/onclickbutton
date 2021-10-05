import React from "react";
import cn from "classnames";
import Button from "./Button";

function ListItem(props) {
  return (
    <div className={cn("border-2 p-2")}>
      <div class="flex">
        <div class="flex-shrink">
          <div className={cn("text-sm w-8/12")}>{props.text}</div>
        </div>
        <div class="flex-shrink">
          <div>
            <Button
              nameOfTheButton={props.buttonName}
              onClick={props.onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
