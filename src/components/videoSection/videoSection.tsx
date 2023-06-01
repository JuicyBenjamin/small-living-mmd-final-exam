import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section
      class={"flex flex-col md:flex-row justify-around gap-8 py-20 md:px-16 items-center"}
    >
      <iframe
        width="315"
        height="560"
        src="https://www.youtube.com/embed/oUD5SSpbZ4A"
        title="Van Life Explainer - Small Living, KEA"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <iframe
        width="315"
        height="560"
        src="https://www.youtube.com/embed/oUD5SSpbZ4A"
        title="Van Life Explainer - Small Living, KEA"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
});
