import { component$, useSignal } from "@builder.io/qwik";
import { routeLoader$, Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ArticlesContent } from "~/content";
import type { buttonProps } from "~/components/button";
export interface IArticles {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  author: string;
  date: string;
  mainImg : {
    src : string,
    alt : string
  }
  categories: [
    {
      name: string;
      icon: string;
      url : string
    }
  ];
  section: [
    | {
        type: "text";
        text: string;
      }
    | {
      type: "image",
      src : string,
      alt : string,
      width : number,
      height : number,
      aspectRatio: number
    }
  ],
  button: {
    type: buttonProps["color"]
    text: string
  }
}

export type categoryTypes = "all" | "vanlife" | "tinyhouse" | "tiny-apartment" | "diy"

export const useArticlesLoader = routeLoader$<IArticles[]>(() => {
  const articles = ArticlesContent;

  return articles as IArticles[];
});

export default component$(() => {
  const articles = useArticlesLoader();

  const currentCategory = useSignal<categoryTypes>("all");

  const categoryClasses = "bg-black text-white rounded p-2 hover:bg-white hover:border-black hover:text-black"

  return (
    <>
      <div class="grid justify-center text-center">
        <h1>Articles</h1>
        <h2>Categories</h2>
        <div class="flex gap-4">
          <button class={categoryClasses} onClick$={() => currentCategory.value = "all"}>All</button>
          <button class={categoryClasses} onClick$={() => currentCategory.value = "vanlife"}>Vanlife</button>
          <button class={categoryClasses} onClick$={() => currentCategory.value = "tinyhouse"}>Tinyhouse</button>
          <button class={categoryClasses} onClick$={() => currentCategory.value = "tiny-apartment"}>Tiny Apartments</button>
          <button class={categoryClasses} onClick$={() => currentCategory.value = "diy"}>Diy</button>
        </div>
        <p>Current category is {currentCategory.value}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {articles.value.map((article, key) => (
          <div key={key}>
            <h2>{article.title}</h2>
            <Link href={`/articles/${article.id}`}>
              <Image
                aspectRatio={1 / 1}
                width={200}
                src={article.mainImg.src}
              ></Image>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Articles - Small-living.dk",
  meta: [
    {
      name: "description",
      content: "All articles.",
    },
  ],
};
