export const getFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);

  const defaultColor = [
    "#1ABC9C",
    "#2ECC71",
    "#3498DB",
    "#9B59B6",
    "#34495E",
    "#16A085",
    "#27AE60",
    "#2980B9",
    "#8E44AD",
    "#2C3E50",
    "#F1C40F",
    "#E67E22",
    "#E74C3C",
    "#ECF0F1",
    "#95A5A6",
    "#F39C12",
    "#D35400",
    "#C0392B",
    "#BDC3C7",
    "#7F8C8D",
  ];

  let listColor = null;

  if (value && Array.isArray(JSON.parse(value))) {
    listColor = JSON.parse(value);
  } else {
    listColor = defaultColor;
    saveToLocalStorage(key, defaultColor);
  }

  return listColor;
};

export const saveToLocalStorage = (key: string, data: string[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const hexToRgb = (color: string) => {
  const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  return hex
    ? {
        r: parseInt(hex[1], 16),
        g: parseInt(hex[2], 16),
        b: parseInt(hex[3], 16),
      }
    : null;
};

export const rgbToHex = (r: number, g: number, b: number) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
