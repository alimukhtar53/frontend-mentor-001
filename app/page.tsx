"use client";
import React, { useEffect } from "react";
import ColorPalette from "./components/ColorPalette";
import QrcodeCard from "./components/QrcodeCard";

const COLORS = ["orange", "sky", "lime", "indigo", "yellow", "slate", "rose"];

export default function Home() {
  const [currentColor, setCurrentColor] = React.useState("indigo");

  const handleChangeColor = (index: number) => {
    setCurrentColor(COLORS[index]);
  };

  useEffect(() => {}, [currentColor]);

  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="flex flex-col pt-20 pb-8">
        <QrcodeCard currentColor={currentColor} />
        <ColorPalette
          currentColor={currentColor}
          handleChangeColor={handleChangeColor}
        />
      </div>
    </div>
  );
}
