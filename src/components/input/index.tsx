import React from "react";

interface IProps {
  onAddColor: (color: string) => void;
}

const Input = () => {
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={(e) => onsubmit(e)}>
      <div className="inputBox">
        <label>Add new color:</label>
        <input type="text" name="color" placeholder="Example #333333"></input>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Input;
