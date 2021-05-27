import React, { useState } from "react";
import "./styles/global.scss";
import { Box, Input } from "./components";
import { getFromLocalStorage, hexToRgb, saveToLocalStorage } from "./utils";

const App = () => {
  const [colors, setColors] = useState(getFromLocalStorage("data"));
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState({
    r: false,
    g: false,
    b: false,
    s: false,
  });

  const onRed = (e: React.FormEvent<HTMLElement>) => {
    console.log(e.target);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length !== 7) return alert("Length must 7");
    if (value.substring(0, 1) !== "#") return alert("First character must #");
    const check = colors.filter(
      (color: string) => color === value.toUpperCase()
    );
    if(check.length > 0) return alert("Color already exist")
    const newColors = [...colors, value.toUpperCase()];
    saveToLocalStorage("data", newColors);
    setColors(newColors);
    setValue("");
  };

  const onDelete = (item: string) => {
    const newColors = colors.filter((color: String) => color !== item);
    saveToLocalStorage("data", newColors);
    setColors(newColors);
  };

  return (
    <div className="app">
      <h1>Live Coding Test Box Galery</h1>
      {/* <Input onAddColor={onSubmit} /> */}
      <form className="inputBox" onSubmit={(e) => onSubmit(e)}>
        <label>Add new color:</label>
        <input
          type="text"
          name="color"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Example #333333"
          required
        ></input>
        <button type="submit">Add</button>
      </form>
      <hr className="solid"></hr>
      <div className="filter">
        <input
          type="checkbox"
          checked={filter.r}
          onChange={(e) => onRed(e)}
        ></input>
        <label>{"Red >50%"}</label>
        <input type="checkbox"></input>
        <label>{"Green >50%"}</label>
        <input type="checkbox"></input>
        <label>{"Blue >50%"}</label>
        <input type="checkbox"></input>
        <label>{"Saturation >50%"}</label>
      </div>
      <hr className="solid"></hr>
      <div className="container">
        {colors.map((color: string, index: number) => (
          <Box color={color} index={index} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default App;
