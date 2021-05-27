import React, { useState } from "react";
import "./styles/global.scss";
import { Box, Input } from "./components";
import { getFromLocalStorage, saveToLocalStorage } from "./utils";

const App = () => {
  const [colors, setcolors] = useState(getFromLocalStorage("data"));
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length !== 7) return alert("Length must 7");
    if (value.substring(0, 1) !== "#") return alert("First character must #");
    const newColors = [...colors, value.toUpperCase()];
    saveToLocalStorage("data", newColors);
    setcolors(newColors);
  };

  const onDelete = (item: any) => {
    const newColors = colors.filter((color: string) => color !== item);
    saveToLocalStorage("data", newColors);
    setcolors(newColors);
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
      <div className="container">
        {colors.map((color: string) => (
          <Box color={color} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default App;
