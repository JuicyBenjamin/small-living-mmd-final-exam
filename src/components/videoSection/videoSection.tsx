import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class={"flex flex-col md:flex-row justify-between gap-8 py-20 md:px-16"}>
      <iframe
      class="w-full md:w-full px-4"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk"
        title="YouTube video player"
      
      ></iframe>
      <iframe
            class="w-full md:w-full px-4"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk"
        title="YouTube video player"
      ></iframe>
    </section>
  );
});
