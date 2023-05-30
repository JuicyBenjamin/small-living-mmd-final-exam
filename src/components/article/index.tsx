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
    <article class={"mx-[20rem] min-w-[55ch]"}>
      <h2 class={"text-center pb-6 pt-16"}>{content.title}</h2>
      {/* next and previous articel image buttons component here */}
      <ThreeArticles></ThreeArticles>
      <Hashtags categories={content.categories}></Hashtags>
      <section class={"flex justify-between pb-6"}>
        <div class={"flex gap-2"}>
          <div>{content.date}</div>
          <span> | </span>
          <div>by {content.author}</div>
        </div>
        {/* save the article button component */}
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
        {content.button.type != null ? (
          <Button
            color={content.button.type}
            onClick$={() => scrollTo(0, 0)}
          >
            Go to the top ⇧
          </Button>)
          : null}
      </section>
      {/* comments section component */}
    </article>
  );
});
