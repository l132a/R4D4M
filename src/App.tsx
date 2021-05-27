import React, { useCallback, useState } from "react";
import "./styles/global.scss";
import { Box, Input } from "./components";
import { getFromLocalStorage, saveToLocalStorage } from "./utils";

const App = () => {
  const [colors, setcolors] = useState(getFromLocalStorage("data"));
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(new FormData());
  };

  // const onDelete = useCallback(
  //   (item) => {
  //     const newColors = colors.filter((color: any) => color !== item.color);
  //     saveToLocalStorage("data", newColors);
  //     setcolors(newColors);
  //     console.log(item);
  //   },
  //   [colors]
  // );

  return (
    <div className="app">
      <h1>Live Coding Test Box Galery</h1>
      {/* <Input /> */}
      <form onSubmit={(e: React.FormEvent) => onSubmit(e)}>
        <div className="inputBox">
          <label>Add new color:</label>
          <input type="text" name="color" placeholder="Example #333333"></input>
          <button type="submit">Add</button>
        </div>
      </form>
      <hr className="solid"></hr>
      <div className="container">
        {colors.map((color: string, index: number) => (
          <Box color={color} index={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
