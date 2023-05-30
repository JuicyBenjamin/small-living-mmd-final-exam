import { component$ } from "@builder.io/qwik";
// import { ArticlesContent } from "~/content";
import { Image } from "@unpic/qwik";
import Hashtags from "../hashtags";
import Button from "../button";
import ThreeArticles from "../threeArticles";

import type { articleContent } from "~/routes/articles/[slug]";
import type { IArticles } from "~/routes/articles";

export interface categoriesContent {
  categories: IArticles["categories"];
}


export default component$<articleContent>(({ content }) => {

  return (
    <article class={"flex flex-col justify-center"}>
      <div class="grid">
        <h2 class={"justify-self-center pb-6 pt-16"}>{content.title}</h2>
      </div>
      <ThreeArticles></ThreeArticles>
      <Hashtags categories={content.categories}></Hashtags>
      <div class="mx-auto max-w-[75ch] lg:w-[75ch]">
         <section class={"flex justify-between pb-6"}>
        <div class={"flex gap-2"}>
          <div>{content.date}</div>
          <span> | </span>
          <div>by {content.author}</div>
        </div>
        {/* todo save the article button component */}
        <div>Save the article button</div>
      </section>
      <section class={"grid"}>
        {content.section.map((section, key) => {
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
        {content.button.type != null ? <Button color={content.button.type}></Button> : null}

        <button
          class={"hover:bg-[--accent-green] p-2 "}
          onClick$={() => scrollTo(0, 0)}
        >
          Go to the top ⇧
        </button>
      </section>
      </div>
     
      {/* comments section component */}
    </article>
  );
});
