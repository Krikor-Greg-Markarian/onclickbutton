import React, { useState } from "react";
import cn from "classnames";
import ListItem from "../Src/Components/ListItem";
import List from "../Src/Components/List";
import Numbers from "../Src/Components/Numbers";
import AnotherButton from "../Src/Components/AnotherButton";
import BigBox from "../Src/Components/BigBox";
import TextBlueBorder from "../Src/Components/TextBlueBorder";

export default function Home(props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={cn("container mx-auto")}>
      <div>
        <ListItem
          text={
            "asdaLorem ipsum dolor sit amet consectetur, adipisicing elit.  quas. Quia eum conssdasd"
          }
        />
      </div>
      <div>
        <List
          text={
            "asdaLorem ipsum dolor sit amet consectetur, adipisicing elit.  quas. Quia eum conssdasd "
          }
          items={[
            {
              text: "asdaLorem ipsum dolor sit amet consectetur, adipisicing elit.  quas. Quia eum conssdasd",
              buttonName: "Another Click",
              onClick: () => console.log("hello world"),
            },
            {
              text: "asdaLorem ipsum dolor sit amet consectetur, adipisicing elit.  quas. Quia eum conssdasd",
              buttonName: "123",
              onClick: () => console.log("123"),
            },
            {
              text: "asdaLorem ipsum dolor sit amet consectetur, adipisicing elit.  quas. Quia eum conssdasd",
              buttonName: "Good bye",
              onClick: () => console.log("Good bye"),
            },
          ]}
        />
      </div>

      <div className={cn("pt-12")}>
        <Numbers leftNumber={"1"} rightNumber={"2"} />

        <BigBox
          items={[
            {
              leftNumber: "1",
              rightNumber: "2",
              buttonName: "Hello",
              onClick: () => console.log("hey how are you"),
            },
            {
              leftNumber: "1",
              rightNumber: "2",
              buttonName: "Click Me",
              onClick: () => console.log("123"),
            },
            {
              leftNumber: "1",
              rightNumber: "2",
              buttonName: "Click",
              onClick: () => console.log("Test Me"),
            },
          ]}
        />

        <AnotherButton className={cn("")} buttonName={"Apply"} />
      </div>

      <TextBlueBorder
        text={"Click Me"}
        isSelected={isClicked}
        onClick={() => setIsClicked(true)}
      />
    </div>
  );
}
