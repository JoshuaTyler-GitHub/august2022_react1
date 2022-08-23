import { useState } from "react";
import Button from "./Button";

const DropDown = (props) => {
  const { items } = props;
  const [isDropDownActive, setDropDownActive] = useState(Boolean(false));
  
  const drop = (
    <div
      className="bg-dark rounded px-2"
      style={{
        left: 0,
        position: "absolute",
        zIndex: 1
      }}
    >
      {(Boolean(items) && items.length > 0)
        ? items
        : "no items to display"
      }
    </div>
  );
  
  return (
    <Button
      color={isDropDownActive ? 'info' : 'primary'}
      onClick={() => setDropDownActive(!isDropDownActive)}
    >
      {"drop down"}
      {isDropDownActive && drop}
    </Button>
  );
};
export default DropDown;
