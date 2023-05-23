import { component$ } from "@builder.io/qwik";
import { ArticlesContent } from "~/content";
import { Image } from "@unpic/qwik";
import Hashtags from "../hashtags";

export default component$(() => {
  const articleContent = ArticlesContent[0];
  console.log(articleContent);

  return (
    <article class={"mx-[20rem]"}>
      <h2 class={"text-center pb-24 pt-16"}>{articleContent.title}</h2>
      {/* next and previous articel image buttons component here */}
      <Hashtags></Hashtags>
      <section class={"flex justify-between pb-6"}>
        <div class={"flex gap-2"}>
          <div>{articleContent.date}</div>
          <span> | </span>
          <div>by {articleContent.author}</div>
        </div>
        {/* save the article button component */}
        <div>Save the article button</div>
      </section>
      <section class={"grid"}>
        {articleContent.sections.map((section, key) => {
          if (section.type == "text") {
            return (
              <p key={key} class={"text-justify pt-12"}>
                {section.text}
              </p>
            );
          }
          if (section.type == "image") {
            if (section.src == null) return;
            return (
              <Image
                key={key}
                src={section.src}
                width={section.width}
                aspectRatio={section.aspectRatio}
                alt={section.alt}
                class={"py-24 justify-self-center"}
              />
            );
          }
        })}
      </section>
      {/* related articles carousel component */}
      <section class={"flex justify-end pb-12"}>
        <button
          class={"hover:bg-[--accent-green] p-2 "}
          onClick$={() => scrollTo(0, 0)}
        >
          Go to the top ⇧
        </button>
      </section>
            {/* comments section component */}
    </article>
  );
});
