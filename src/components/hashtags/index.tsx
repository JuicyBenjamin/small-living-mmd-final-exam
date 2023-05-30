import { component$ } from "@builder.io/qwik";
import type { categoriesContent } from "../article";

export default component$<categoriesContent>(({categories}) => {
console.log(categories);
  return (
    <div class={"w-[100vw] bg-[--accent-lillac] my-10 py-2 grid"}>
      <div class="flex gap-8 mx-auto max-w-[55ch] lg:w-[55ch]">
             {categories.map((cat, key) => {
        if (cat == null) return;
        return <span class={"text-white"} key={key}><a class={"hover:underline cursor-pointer"} href={cat.url}>#{cat.name}</a></span>;
      })} 
      </div>

    </div>
  );
});
