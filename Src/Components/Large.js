import React from "react";
import TesxtSection from "./TesxtSection";

function Large(props) {
  return (
    <div>
      {props.items.map((item, idx) => (
        <TesxtSection key={idx} bulletPoints={item.bulletPoints} />
      ))}
    </div>
  );
}

export default Large;
