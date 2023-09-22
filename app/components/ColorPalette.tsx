"use client";
import React from "react";

const COLORS = ["orange", "sky", "lime", "indigo", "yellow", "slate", "rose"];

const ColorPalette = ({ handleChangeColor }: any) => {
  return (
    <div className="flex bg-white mt-8 rounded-full p-2 justify-between shadow-sm">
      {COLORS.map((color, index) => (
        <button
          key={index}
          className={`bg-${color}-300 w-10 h-10 rounded-full`}
          onClick={() => handleChangeColor(index)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
