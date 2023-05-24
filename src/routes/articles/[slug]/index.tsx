import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import type { rmArticles } from "..";
import { ArticlesContent } from "~/content";


export const useArticleLoader = routeLoader$<rmArticles>(async (requestEvent) => {

  console.log("requestEvent.params", requestEvent.params)
  // This code runs only on the server, after every navigation
  // const res = await fetch(`https://rickandmortyapi.com/api/character/${requestEvent.params.slug}`);
  // const character = await res.json();

  const article = ArticlesContent[(requestEvent.params.slug)-1]
  return article as rmArticles;
});


export default component$ (() => {
  const article = useArticleLoader();
  return (
  <div>
    <h1>Article: {article.value.title}</h1>
  </div>
  )
  })


  // metadata is dynamic now

  export const head: DocumentHead = ({resolveValue, params}) => {
    const metaArticle = resolveValue(useArticleLoader);


    return {
      title:`${metaArticle.title} - Small-Living.dk` ,
      meta: [
        {
          name: 'description',
          content: metaArticle.meta.desc,
        },
        {
          name: 'id',
          content: params.slug,
        },
      ],
    };
  };