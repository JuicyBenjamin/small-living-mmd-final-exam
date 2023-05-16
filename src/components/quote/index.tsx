import { component$ } from "@builder.io/qwik";

import { homeContent } from "~/content";

export default component$(() => {
  return (
    <section class="bg-yellow-950 text-white p-10 flex justify-center">
      <div class="flex flex-col max-w-[50ch]">
        <div>“ {homeContent.quote.quote} ”</div>
        <span class="uppercase self-end">- {homeContent.quote.author}</span>
      </div>
    </section>
  );
});
