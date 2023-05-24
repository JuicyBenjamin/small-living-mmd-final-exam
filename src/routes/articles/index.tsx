import { component$ } from "@builder.io/qwik";
import { routeLoader$, Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ArticlesContent } from "~/content";
export interface rmArticles {
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
  ];
}

// export const useArticlesLoader = routeLoader$<rmArticles[]>(async () => {
//   // This code runs only on the server, after every navigation
//   const res = await fetch(`https://rickandmortyapi.com/api/character/?page=5`);
//   const characters = await res.json();
//   return characters.results as rmArticles[];
// });

export const useArticlesLoader = routeLoader$<rmArticles[]>(() => {
  const articles = ArticlesContent;

  return articles as rmArticles[];
});

export default component$(() => {
  const articles = useArticlesLoader();
  console.log("articles.value", articles.value);
  return (
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
