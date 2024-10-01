import { Component, Show } from "solid-js";

export const Article: Component = (props: any) => {
  return (
    <>
      <article
        id={props.id}
        class={"gap-4 p-4 flex flex-col justify-center  " + props.class}
      >
        <Show when={props.name}>
          <div class="flex flex-row justify-center h-32 mt-32">
            <hr class="border-primary border-[1px] w-full self-center" />
            <h2 class="text-3xl mx-10 text-nowrap font-bold self-center">
              {props.name}
            </h2>
            <hr class="border-primary border-[1px] w-full self-center" />
          </div>
        </Show>

        {props.children}
      </article>
    </>
  );
};
