import { Component } from "solid-js";
import { SolidTyper } from "solid-typer";

export const Hero: Component = () => {
  const pseudoList = ["Linventif", "Grégoire Bécue"];
  return (
    <>
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-2xl md:text-3xl font-bold text-blue">
          Hello there, I'm
        </h2>
        <SolidTyper
          text={pseudoList}
          backspaceSpeed={100}
          className="text-4xl md:text-5xl py-10 font-bold text-nowrap"
          loop
          cursor
          cursorClassName="cursor text-nowrap"
        />
        <h2 class="text-lg">
          <span class="font-bold">Fullstack Developer</span> and{" "}
          <span class="font-bold">3D Artist</span> who's passionate about
          creating awesome projects.
        </h2>
      </div>
    </>
  );
};
