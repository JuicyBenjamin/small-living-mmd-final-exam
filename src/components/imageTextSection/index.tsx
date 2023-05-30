import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export interface IImageTextSection {
  content: {
    title: string;
    subtitle?: string;
    image: {
      url: string;
      alt: string;
    };
    text: string[];
  };
}

export default component$<IImageTextSection>(({ content }) => {
  return (
    <article class={"py-20"}>
      <div class={"w-full grid grid-cols-[4fr_auto_1fr]"}>
        <span
          class={"w-full mb-[3.5rem] border-b-4 border-[--dark-brown]"}
        ></span>
        <h2 class={"border-b-0 px-2"}>{content.title}</h2>
        <span
          class={"w-full mb-[3.5rem] border-b-4 border-[--dark-brown]"}
        ></span>
      </div>
      <div class={"flex justify-center pt-8 px-16 gap-12"}>
        <section class="">
        <Image
            src={content.image.url}
            width={500}
            aspectRatio={1 / 1}
            alt={content.image.alt}
            class={"border-4 border-[--accent-green]"}
          />
        </section>
        <section class="flex flex-col justify-between">
          {content.text.map((text, key) => (
            <p key={key} class={"max-w-[55ch]"}>
              {text}
            </p>
          ))}
        </section>
      </div>
    </article>
  );
});
