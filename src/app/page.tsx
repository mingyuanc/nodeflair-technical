"use client";
import Card from "@/components/Card";
import JobDescription from "@/components/JobDescription";
import { useState } from "react";
import data from "../data.json";
export default function Home() {
  const [selected, setSelected] = useState(data[0]);
  return (
    <div className="max-w-[1110px] w-full h-max flex">
      <div className="w-full p-[5px] xl:w-[29.5rem] xl:pt-10">
        {data.map((x) => (
          <Card
            key={x.title + x.company}
            onclick={() => setSelected(x)}
            data={x}
            isSelected={x == selected}
          />
        ))}
      </div>
      <div className="invisible xl:visible xl:px-[5px]">
        <JobDescription title={selected.title} />
      </div>
    </div>
  );
}
