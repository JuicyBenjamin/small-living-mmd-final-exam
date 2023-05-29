import { component$ } from "@builder.io/qwik";

import { homeContent } from "~/content";

export default component$(() => {
  const numbersQuotes = homeContent.quote.length;
  const chosenQuote = Math.floor(Math.random() * numbersQuotes);
  return (
    <section class="bg-[--accent-lillac] text-white p-10 flex justify-center my-12">
      <div class="flex flex-col max-w-[50ch]">
        <div>“ {homeContent.quote[chosenQuote].quote} ”</div>
        <span class="uppercase self-end">- {homeContent.quote[chosenQuote].author}</span>
      </div>
    </section>
  );
});
