import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { ArticlesContent } from "~/content";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const fourArticles = ArticlesContent.slice(ArticlesContent.length - 4);

  const highlightArticle = fourArticles[fourArticles.length - 1];
  const otherArticles = fourArticles.slice(0, 3);

  const chosenCategory = "Multi Functional Furniture";

  return (
    <section>
      <div class={"w-full grid md:grid-cols-[1fr_auto_4fr] grid-cols-[1fr_auto_1fr] text-center"}>
        <span
          class={"w-full mb-[3.5rem] border-b-4 border-[--dark-brown]"}
        ></span>
        <h2 class={"border-b-0 px-2"}>{chosenCategory}</h2>
        <span
          class={"w-full mb-[3.5rem] border-b-4 border-[--dark-brown]"}
        ></span>
      </div>

      <div class="max-sm:hidden grid grid-cols-[1fr_3fr] grid-rows-[80vh] gap-12 px-20">
        <div class="relative grid grid-rows-3 gap-4">
          {otherArticles.map((article, key) => (
            <div key={key} class="relative flex flex-col justify-end">
              <h3 class="absolute">{article.title}</h3>
              <Link
                class="z-20 absolute h-full w-full border-r-2 border-b-2 border-[--accent-green] bg-cover"
                href={`/articles/${article.id}`}
              />
              <Image
                src={article.mainImg.src}
                layout={"fullWidth"}
                height={350}
                alt={article.mainImg.alt}
                class="object-cover h-full border-4 border-[--accent-green]"
              ></Image>
            </div>
          ))}
        </div>
        <div class="relative">
          <div class="relative flex flex-col justify-end h-[80vh]">
            <h3 class="absolute">{highlightArticle.title}</h3>
            <Link
                class="z-20 absolute h-full w-full border-r-2 border-b-2 border-[--accent-green] bg-cover"
                href={`/articles/${highlightArticle.id}`}
              />
            <Image
              src={highlightArticle.mainImg.src}
              layout={"fullWidth"}
              height={350}
              alt={highlightArticle.mainImg.alt}
              class="object-cover h-full border-4 border-[--accent-green]"
            ></Image>
          </div>
        </div>
      </div>


      <div class="hidden max-sm:grid grid-cols-2 grid-rows-2 gap-2 px-4">

          {fourArticles.map((article, key) => (
            <div key={key} class="relative flex flex-col justify-end ">
              <h3 class="max-w-full max-h-20 py-2 absolute line-clamp-1">{article.title}</h3>
              <Link
                class="z-20 absolute h-full w-full border-r-2 border-b-2 border-[--accent-green] bg-cover"
                href={`/articles/${article.id}`}
              />
              <Image
                src={article.mainImg.src}
                layout={"fullWidth"}
                height={350}
                alt={article.mainImg.alt}
                class="object-cover h-full border-4 border-[--accent-green]"
              ></Image>
            </div>
          ))}
 
      </div>
    </section>
  );
});
