import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import type { rmArticles } from "..";
import { ArticlesContent } from "~/content";
import Article from "~/components/article";


export const useArticleLoader = routeLoader$<rmArticles>(async (requestEvent) => {
  const article = ArticlesContent[Number(requestEvent.params.slug)-1];
  return article as rmArticles;
});

export interface articleContent {
  content : rmArticles;
}

export default component$ (() => {
  const article = useArticleLoader();
  return (
  // <div>
  //   <h1>Article: {article.value.title}</h1>
  // </div>
  <Article content = {article.value}></Article>
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
          content: metaArticle.desc,
        },
        {
          name: 'id',
          content: params.slug,
        },
      ],
    };
  };