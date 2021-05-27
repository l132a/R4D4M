import React, { useState } from "react";
import "./styles/global.scss";
import { Box, Input } from "./components";
import {
  getFromLocalStorage,
  hexToRgb,
  rgbToHsl,
  saveToLocalStorage,
} from "./utils";

const App = () => {
  const [colors, setColors] = useState(getFromLocalStorage("data", 1));
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState(getFromLocalStorage("filter", 2));

  // const tmp = () => {};

  const onRed = (e: React.FormEvent<HTMLElement>) => {
    const data = { ...filter, r: !filter.r };
    setFilter(data);
    saveToLocalStorage("filter", data);

    colors.map((color: string, index: number) => {
      const hex = hexToRgb(color);
      
      const hsl = rgbToHsl(hex?.r || 0, hex?.g || 0, hex?.b || 0);

      console.log(hsl);
    });
  };

  const onGreen = (e: React.FormEvent<HTMLElement>) => {
    const data = { ...filter, g: !filter.g };
    setFilter(data);
    saveToLocalStorage("filter", data);
  };

  const onBlue = (e: React.FormEvent<HTMLElement>) => {
    const data = { ...filter, b: !filter.b };
    setFilter(data);
    saveToLocalStorage("filter", data);
  };

  const onSaturation = (e: React.FormEvent<HTMLElement>) => {
    const data = { ...filter, s: !filter.s };
    setFilter(data);
    saveToLocalStorage("filter", data);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length !== 7) return alert("Length must 7");
    if (value.substring(0, 1) !== "#") return alert("First character must #");
    const check = colors.filter(
      (color: string) => color === value.toUpperCase()
    );
    if (check.length > 0) return alert("Color already exist");
    const newColors = [...colors, value.toUpperCase()];
    saveToLocalStorage("data", newColors);
    setColors(newColors);
    setValue("");
  };

  const onDelete = (item: number) => {
    const newColors = colors.filter(
      (color: String, index: number) => index !== item
    );
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
        <input
          type="checkbox"
          checked={filter.g}
          onChange={(e) => onGreen(e)}
        ></input>
        <label>{"Green >50%"}</label>
        <input
          type="checkbox"
          checked={filter.b}
          onChange={(e) => onBlue(e)}
        ></input>
        <label>{"Blue >50%"}</label>
        <input
          type="checkbox"
          checked={filter.s}
          onChange={(e) => onSaturation(e)}
        ></input>
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
