import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import type { IArticles } from "..";
import { ArticlesContent } from "~/content";
import Article from "~/components/article";


export const useArticleLoader = routeLoader$<IArticles>(async (requestEvent) => {
  const article = ArticlesContent[Number(requestEvent.params.slug)-1];
  return article as IArticles;
});


export interface articleContent {
  content : IArticles;
}

export default component$ (() => {
  const article = useArticleLoader();
  return (
    <Article content = {article.value} />
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