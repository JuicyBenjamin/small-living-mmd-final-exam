import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class={"flex justify-between gap-8 py-20 px-16"}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk"
        title="YouTube video player"
      
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk"
        title="YouTube video player"
      ></iframe>
    </section>
  );
});
