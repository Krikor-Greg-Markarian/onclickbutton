import React, { useState } from "react";
import cn from "classnames";
import ListItem from "../Src/Components/ListItem";
import List from "../Src/Components/List";
import Numbers from "../Src/Components/Numbers";
import AnotherButton from "../Src/Components/AnotherButton";
import BigBox from "../Src/Components/BigBox";
import TextBlueBorder from "../Src/Components/TextBlueBorder";
import Box from "../Src/Components/Box";
import Wale3a from "../Src/Components/Wale3a";
import BegesBoxEver from "../Src/Components/BegesBoxEver";
import Large from "../Src/Components/Large";
import BunchOfButtons from "../Src/Components/BunchOfButtons";
import FollowUnderEachOther from "../Src/Components/FollowUnderEachOther";
import BoxOfAlphabetsNumbers from "../Src/Components/BoxOfAlphabetsNumbers";

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
              rightNumber: "123233",
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

        <AnotherButton
          // onClick={() => setIsClicked(true)}
          buttonName={"Apply"}
          isSelected={isClicked}
          // onClick={() => console.log("Applied")}
        />
      </div>

      <TextBlueBorder
        text={"Click Me"}
        isSelected={isClicked}
        onClick={() => setIsClicked(true)}
      />

      <div className={cn("mb-10")}>
        <Box one={"1"} two={"2"} three={"3"} />

        <BegesBoxEver
          items={[
            { one: "A", two: "C", three: "Z" },
            { one: "K", two: "2", three: "#" },
          ]}
        />

        <Wale3a wale3a={"wale3a"} onClick={() => console.log("wale3a!!!")} />
      </div>

      <div className={cn("border-2 text-center")}>
        <Large
          items={[
            { bulletPoints: "Here text" },
            { bulletPoints: "Here text" },
            { bulletPoints: "Here text" },
          ]}
        />

        <BunchOfButtons
          items={[
            { buttonName: "Hello", onClick: () => console.log("Hello") },
            { buttonName: "World", onClick: () => console.log("World") },
            { buttonName: "Goodbye", onClick: () => console.log("Goodbye") },
          ]}
        />

        <FollowUnderEachOther
          items={[{ follow: "Follow" }, { follow: "Follow" }]}
        />

        <BoxOfAlphabetsNumbers
          items={[{ number1: "1", number2: "2", number3: "Z" }]}
        />
      </div>
    </div>
  );
}
