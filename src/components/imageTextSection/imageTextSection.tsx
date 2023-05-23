import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

import { homeContent } from "~/content";

// todo
// * if sentence for types : (if image is on left or right - even vs. odd thing)

export default component$(() => {
  const content = homeContent.imageSection;
  return (
    <article class={"py-20"}>
      <div class={"w-full grid grid-cols-[4fr_auto_1fr]"}>
        <span
          class={"w-full mb-[3.5rem] border-b-4 border-[--accent-green]"}
        ></span>
        <h2 class={"border-b-0 uppercase px-2"}>{content.title}</h2>
        <span
          class={"w-full mb-[3.5rem] border-b-4 border-[--accent-green]"}
        ></span>
      </div>
      <div class={"flex justify-center pt-8 px-16 gap-12"}>
        <section class="px-">
          <Image
            src={content.image.src}
            layout="fullWidth"
            alt={content.image.src}
            class={""}
          ></Image>
        </section>
        <section>
          {content.text.map((text, key) => {
            if (text == null) return;
            return (
              <p key={key} class={"max-w-[55ch] pb-4"}>
                {text}
              </p>
            );
          })}
        </section>
      </div>
    </article>
  );
});
