import React from "react";
import ListItem from "./ListItem";
import NumbersAlphabet from "./NumbersAlphabet";

function BoxOfAlphabetsNumbers(props) {
  return (
    <div>
      {props.items.map((item, idx) => (
        <NumbersAlphabet key={idx}
        number1={item.number1} 
        number2={item.number2} 
        number3={item.number3} 
        />
      ))}
    </div>
  );
}

export default BoxOfAlphabetsNumbers;
