import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class={"flex justify-between gap-8 py-20 px-16"}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/59KKxorhMD0"
        title="YouTube video player 1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/59KKxorhMD0"
        title="YouTube video player 2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
});
