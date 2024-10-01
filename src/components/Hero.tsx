import { Component } from "solid-js";
import { SolidTyper } from "solid-typer";

export const Hero: Component = () => {
  const pseudoList = ["Linventif", "Grégoire Bécue"];
  return (
    <>
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-3xl font-bold text-blue">Hello there, I'm</h2>
        <SolidTyper
          text={pseudoList}
          backspaceSpeed={100}
          className="text-6xl p-10 font-bold"
          loop
          cursor
          cursorClassName="cursor"
        />
        <h2 class="text-xl">
          <span class="font-bold">Fullstack Developer</span> who passionate in
          creating awesome stuff.
        </h2>
      </div>
    </>
  );
};
