import { component$ } from "@builder.io/qwik";
import type { categoriesContent } from "../article";

export default component$<categoriesContent>(({categories}) => {
console.log(categories);
  return (
    <div class={"w-[100vw] flex gap-8 bg-[--accent-lillac] mx-[-20rem] pl-[20rem] my-10 py-2"}>
      {categories.map((cat, key) => {
        if (cat == null) return;
        return <span class={"text-white"} key={key}><a class={"hover:underline cursor-pointer"} href={cat.url}>#{cat.name}</a></span>;
      })}
    </div>
  );
});
