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
