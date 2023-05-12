import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <ul class={"flex flex-row justify-center gap-12 py-12"}>
      <li>
        <a class={"uppercase"} href="/">Home</a>
      </li>
      <li>
        <a class={"uppercase"} href="/articles">Articles</a>
      </li>
      <li>
        <a class={"uppercase"}href="/about">About</a>
      </li>
      <li>
        <a class={"uppercase"} href="/contact">Contact</a>
      </li>
    </ul>
  );
});
