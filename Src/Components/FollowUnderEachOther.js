import React from "react";
import Follow from "./Follow";

function FollowUnderEachOther(props) {
  return (
    <div>
      {props.items.map((item, idx) => (
        <Follow key={idx} follow={item.follow} />
      ))}
    </div>
  );
}

export default FollowUnderEachOther;
