import React from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils";

interface IProps {
  color: string;
  index: number;
  onDelete: (color: String) => void;
}

const Box: React.FunctionComponent<IProps> = (props) => {
  return (
    <form>
      <div className="box" style={{ backgroundColor: props.color }} />
      <div className="boxAction">
        <label>{props.color}</label>
        <button
          type="button"
          className="btnDelete"
          name="btn_delete"
          onClick={() => props.onDelete(props.color)}
        >
          x
        </button>
      </div>
    </form>
  );
};

export default Box;
