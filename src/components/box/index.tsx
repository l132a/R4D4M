import React from "react";
interface IProps {
  color: string;
  index: number;
  onDelete: (index: number) => void;
}

const Box: React.FunctionComponent<IProps> = (props) => {
  return (
    <div>
      <div className="box" style={{ backgroundColor: props.color }} />
      <div className="boxAction">
        <label>{props.color}</label>
        <button
          type="button"
          className="btnDelete"
          name="btn_delete"
          onClick={() => props.onDelete(props.index)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Box;
