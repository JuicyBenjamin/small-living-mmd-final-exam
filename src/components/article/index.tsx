import { component$, useSignal } from "@builder.io/qwik";
// import { ArticlesContent } from "~/content";
import { Image } from "@unpic/qwik";
import Hashtags from "../hashtags";
import Button from "../button";
import ThreeArticles from "../threeArticles";
import CommentSection from "../commentSection";

import type { articleContent } from "~/routes/articles/[slug]";
import type { IArticles } from "~/routes/articles";


export interface categoriesContent {
  categories: IArticles["categories"];
}

export default component$<articleContent>(({ content }) => {

  const bookmarkSVG = useSignal<Element>();
  const colorFillBookmark = useSignal("M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z");

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
          <div
            onClick$={() =>
              colorFillBookmark.value == "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                ? (colorFillBookmark.value = "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z'")
                : (colorFillBookmark.value = "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z")
            }
          >
            <Button color="brown" class="flex gap-4">
              Save the article button
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bookmark"
                viewBox="0 0 20 20"
              >
                <path ref={bookmarkSVG} d={colorFillBookmark} />
              </svg>
            </Button>
          </div>
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
          <button
            class={"hover:bg-[--accent-green] p-2 "}
            onClick$={() => scrollTo(0, 0)}
          >
            Go to the top ⇧
          </button>
        </section>
      </div>
      <CommentSection />
    </article>
  );
});
