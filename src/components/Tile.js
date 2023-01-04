import PartialComponent from "./Partial";
import styles from "./Tile.module.css";
import tileTypeStyles from "./TileTypes.module.css";

const TileComponent = (props) => {
  return (
    <td id={props.id} className={`${styles.Tile} ${tileTypeStyles[props.type]} ${styles[props.rotation]}`}>
      <div className={`${styles[`anti-${props.rotation}`]}  ${styles.container}`}>
        {props.text}
        <PartialComponent  partial = {props.partial} ></PartialComponent>
      </div>
    </td>
  );
};

export default TileComponent;
