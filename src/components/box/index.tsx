import React from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils";

const Box = (props: any) => {
  const deleteColor = () => {
    let colors = getFromLocalStorage("data");

    const newColors = colors.filter((color: any) => color !== props.color);

    saveToLocalStorage("data", newColors);

  };

  return (
    <form>
      <div className="box" style={{ backgroundColor: props.color }} />
      <div className="boxAction">
        <label>{props.color}</label>
        <button
          type="button"
          className="btnDelete"
          name="btn_delete"
          onClick={deleteColor}
        >
          x
        </button>
      </div>
    </form>
  );
};

export default Box;
