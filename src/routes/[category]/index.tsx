import { component$, useSignal } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import Quote from "~/components/quote";
import { ArticlesContent } from "~/content";

export const useCategoryLoader = routeLoader$((requestEvent) => {
  const acceptedParams: categoryTypes[] = ["all", "vanlife", "tinyhouse", "tiny-apartment", "diy"];
  if (acceptedParams.includes(requestEvent.params.category as categoryTypes)) {
    return requestEvent.params.category as categoryTypes;
  }
  const acceptedTags = ArticlesContent.flatMap((article) =>
    article.categories.map((category) => category.name)
  );
  if (acceptedTags.includes(requestEvent.params.category as string)) {
    return requestEvent.params.category as string;
  }
  requestEvent.redirect(302, "/all")
})

export type categoryTypes = "all" | "vanlife" | "tinyhouse" | "tiny-apartment" | "diy"

export default component$(() => {
  const currentCategoryParam = useCategoryLoader().value;
  const currentCategory = useSignal<categoryTypes>(currentCategoryParam as categoryTypes);

  const filteredArticles = ArticlesContent.filter((article) => {
    if (article.categories.map((category) => category.name).includes(currentCategory.value)) {
      return article;
    }
  });

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
        <p class="m-8">Current category is {currentCategory.value}</p>
      </div>
      <div class="grid justify-center">
        {/* should be the first 5 articles here */}
        {filteredArticles.length > 0 ? (
          <div class="grid grid-cols-2 max-w-[1200px] m-auto gap-4 min-h-[24rem] my-8">
            <div class="grid grid-cols-2 gap-4">
              {filteredArticles.slice(1, 5).map((article, key) => (
                <div class="w-full h-full relative flex flex-col justify-end border-2 border-[--accent-green] text-white m-auto" key={key}>
                  <h3 class="absolute">
                    {article.title}
                  </h3>
                  <Image class="object-cover h-full w-full" layout="fullWidth" src={article.mainImg.src} alt={article.mainImg.alt} />
                  <Link class="absolute h-full w-full" href={`/articles/${article.id}`} />
                </div>
              ))}
            </div>
            <div>
              {filteredArticles.slice(0, 1).map((article, key) => (
                <div class="relative w-full h-full border-2 border-[--accent-green] text-white flex flex-col justify-end" key={key}>
                  <h3 class="absolute">
                    {article.title}
                  </h3>
                  <Image class="object-cover h-full w-full aspect-[4-3]" layout="fullWidth" src={article.mainImg.src} alt={article.mainImg.alt} />
                  <Link class="absolute h-full w-full" href={`/articles/${article.id}`} />
                </div>
              ))}
            </div>
          </div>
        ) : currentCategory.value != "all" ? <div class="m-72">No articles found</div> : null}
      </div>
      {/* Should be the purple divider */}
      <Quote />
      {/* Should be the rest of the articles here  */}
      <div class="mx-auto my-8 grid grid-cols-4 max-w-[1200px] gap-4">
        {currentCategory.value != "all" ? (
          filteredArticles.length > 5 ? (
            filteredArticles.slice(5).map((article, key) => {
              return  (
                <div class="relative w-full h-[12rem] flex flex-col justify-end" key={key}>
                  <h3 class="absolute">
                    {article.title}
                  </h3>
                  <Image class="object-cover h-full w-full aspect-[4-3]" layout="fullWidth" src={article.mainImg.src} alt={article.mainImg.alt} />
                  <Link class="absolute h-full w-full" href={`/articles/${article.id}`} />
                </div>
              )
            })
          ) : null
          ) : (
          ArticlesContent.map((article, key) => {
            return (
              <div class="relative aspect-[4/3] flex flex-col justify-end" key={key}>
                <h3 class="absolute">
                  {article.title}
                </h3>
                <Image class="object-cover h-full w-full aspect-[4-3]" layout="fullWidth" src={article.mainImg.src} alt={article.mainImg.alt} />
                <Link class="absolute h-full w-full" href={`/articles/${article.id}`} />
              </div>
            )})
          )
        }
      </div>
    </>
  )
})