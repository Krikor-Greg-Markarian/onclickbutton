import cn from "classnames";
import React, { useState } from "react";

function Usestate(props) {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("flex justify-center items-center")}>
      <div className={cn("w-3/12")}>
        {props.isMostPopular ? (
          <div className={cn("border-2 border-red-300 text-center")}>
            <div>
              <p>You clicked me {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click Me</button>

              <div></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Usestate;
