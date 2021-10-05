import React, { useState } from "react";
import cn from "classnames";
import BoxButton from "../Src/Components/BoxButton";
import TextBox from "../Src/Components/TextBox";
import ArrayTwoBox from "../Src/Components/ArrayTwoBox";

export default function Home(props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={cn("container mx-auto")}>
      <div className={cn("flex justify-center items-center")}>
        <BoxButton
          text={"click me"}
          isSelected={isClicked}
          onClick={() => setIsClicked(true)}
        />
      </div>
      <br></br>
      <br></br>
      <div className={cn("flex justify-center items-center")}>
        <TextBox
          text={"lorem textasdasdsadsadsadsads"}
          isSelected={isClicked}
          onClickTop={() => console.log("99")}
          onClickBottom={() => console.log("88")}
        />
      </div>
      <br></br>
      <br></br>
      <ArrayTwoBox
        text={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea cumque fugiat id maxime eos molestiae nemo ad expedita a est laudantium, officiis doloribus quaerat! Unde sapiente placeat maiores adipisci? Ullam?"
        }
        cancel={"Cancel"}
        ok={"Ok"}
        isSelected={isClicked}
        topButton={() => console.log("Cancel")}
        buttomButton={() => console.log("Ok")}
        listItems={[
          { text: "123" },
          { text: "123" },
          { text: "123" },
          { text: "123" },
        ]}
      />
    </div>
  );
}
