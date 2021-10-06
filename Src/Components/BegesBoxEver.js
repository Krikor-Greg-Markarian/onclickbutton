import React from "react";
import Box from "./Box";

function BegesBoxEver(props) {
  return (
    <div>
      {props.items.map((item, idx) => (
        <Box key={idx} one={item.one} two={item.two} three={item.three} />
      ))}
    </div>
  );
}

export default BegesBoxEver;
