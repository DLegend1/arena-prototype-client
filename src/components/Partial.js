import React, { useState } from "react";
import partialStyles from "./Partial.module.css";
import tileTypeStyles from "./TileTypes.module.css";

const PartialComponent = (props) => {
  // const [partial, setPartial] = useState({
  //   up: "none",
  //   right: "none",
  //   down: "none",
  //   left: "none",
  // });

  return (
    <div className={partialStyles.partials}>
      <div className={`${partialStyles.up} ${tileTypeStyles[props.partial.up]}`}></div>
      <div className={`${partialStyles.right} ${tileTypeStyles[props.partial.right]}`}></div>
      <div className={`${partialStyles.down} ${tileTypeStyles[props.partial.down]}`}></div>
      <div className={`${partialStyles.left} ${tileTypeStyles[props.partial.left]}`}></div>
    </div>
  );
};

export default PartialComponent;
