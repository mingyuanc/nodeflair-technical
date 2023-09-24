"use client";
import Card from "@/components/Card";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="bg-background w-full h-max p-11">
      <div className=" w-full xl:w-[29.5rem] ">
        {Array.from(Array(10).keys()).map((x) => (
          <Card
            key={x}
            onclick={() => setSelected(x)}
            id={x}
            isSelected={x == selected}
          />
        ))}
      </div>
    </div>
  );
}
