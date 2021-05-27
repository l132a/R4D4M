export const getFromLocalStorage = (key: string, mode: number) => {
  const value = localStorage.getItem(key);
  let output = null;
  if (mode === 1) {
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

    if (value && JSON.parse(value)) {
      output = JSON.parse(value);
    } else {
      output = defaultColor;
      saveToLocalStorage(key, defaultColor);
    }
  } else {
    const defaultFilter = {
      r: false,
      g: false,
      b: false,
      s: false,
    };
    if (value && JSON.parse(value)) {
      output = JSON.parse(value);
    } else {
      output = defaultFilter;
      saveToLocalStorage(key, defaultFilter);
    }
  }
  return output;
};

export const getFilterFormLocalStorage = (key: string) => {};

export const saveToLocalStorage = (key: string, data: any) => {
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

export const rgbToHsl = (r: number, g: number, b: number) => {
  // (r /= 255), (g /= 255), (b /= 255);

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    // h /= 6;
  }

  return {h:h, s:s, l:l};
};
