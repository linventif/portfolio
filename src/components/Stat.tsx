import { Component, For, Show } from "solid-js";

export const Stat: Component = () => {
  return (
      <div class="mt-12 flex flex-col w-full text-center gap-4">
        <p class="text-lg">Also, I've done some cool stuff:</p>
        <div class="stats stats-vertical sm:stats-horizontal shadow border border-primary">
          <div class="stat place-items-center">
            <div class="stat-title">Content Views</div>
            <div class="stat-value">+25,760,000</div>
            <div class="stat-desc">over YouTube, Steam and WebSites</div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title">End Users</div>
            <div class="stat-value">+175,000</div>
            <div class="stat-desc">over Discord, GMod and 3D WebSites</div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title">Projects</div>
            <div class="stat-value">+100</div>
            <div class="stat-desc">of 3D, Dev and Design</div>
          </div>
        </div>
      </div>
  );
};
