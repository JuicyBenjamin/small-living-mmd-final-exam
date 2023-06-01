import { component$ } from "@builder.io/qwik";
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
  categories: ICategories[];
  section: ISection[],
  button: {
    type: buttonProps["color"]
    text: string
  }
}

export interface ICategories {
  name: string;
  icon: string;
  url : string
}

export interface ISection {
  type?: "image" | "text",
  src? : string,
  alt? : string,
  width? : number,
  height? : number,
  aspectRatio?: number
  text?: string
}

export const useArticlesLoader = routeLoader$<IArticles[]>(() => {
  const articles = ArticlesContent;

  return articles as IArticles[];
});

export default component$(() => {
  const articles = useArticlesLoader();

  return (
    <>
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
