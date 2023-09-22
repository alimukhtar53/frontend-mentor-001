import React, { useState } from "react";
import { COLORS, COLOR_CLASSES } from "../lib/colorClasses";

type ChangeColorFunction = (index: number) => void;

const ColorPalette = ({
  handleChangeColor,
}: {
  handleChangeColor: ChangeColorFunction;
}) => {
  const [activeColorIndex, setActiveColorIndex] = useState<number>(
    COLORS.indexOf("slate")
  );

  const handleColorClick = (index: number) => {
    setActiveColorIndex(index);
    handleChangeColor(index);
  };

  return (
    <div className="flex bg-white mt-8 rounded-full p-2 justify-between shadow-sm">
      {COLORS.map((color, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded-full ${
            COLOR_CLASSES[color]
          } my-animation ${
            activeColorIndex === index
              ? "border-2 border-dashed border-black/50"
              : ""
          }`}
          onClick={() => handleColorClick(index)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
