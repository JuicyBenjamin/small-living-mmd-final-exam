import { component$ } from "@builder.io/qwik";
import { ArticlesContent } from "~/content";
import { Link, useLocation } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

export default component$(() => {
  const threeLatestArticles = ArticlesContent.slice(
    Number(ArticlesContent.length - 3)
  );
  // console.log("threeLatestArticles", threeLatestArticles);

  const route = useLocation();

  return (
    <div class="w-full grid grid-cols-2">
      <div class="grid grid-rows-2 relative md:h-[90vh] h-[55vh]">
        <div class="relative flex flex-col justify-end">
        <h3 class="z-10 absolute p-4">{threeLatestArticles[0].title}</h3>
          <Link
          class="z-20 absolute h-full w-full border-r-2 border-b-2 border-[--accent-green] bg-cover"
          href={`${route.url.origin}/articles/${threeLatestArticles[0].id}`}
        />
        <Image layout="fullWidth" class="object-cover z-0 w-full h-full absolute" src={threeLatestArticles[0].mainImg.src} alt={threeLatestArticles[0].mainImg.alt} />
        </div>
        <div class={`relative flex flex-col justify-end bg-[url('${threeLatestArticles[1].mainImg.src}')]`}>
        <h3 class="z-10 absolute p-4">{threeLatestArticles[1].title}</h3>
          <Link
          class="z-20 absolute h-full w-full border-r-2 border-b-2 border-[--accent-green] bg-cover"
          href={`${route.url.origin}/articles/${threeLatestArticles[1].id}`}
        />
        <Image layout="fullWidth" class="object-cover z-0 w-full h-full absolute" src={threeLatestArticles[1].mainImg.src}  alt={threeLatestArticles[1].mainImg.alt}/>
        </div>
      </div>
      <div class="relative flex flex-col justify-end md:h-[90vh] h-[55vh]">
        <h3 class="z-10 absolute p-4">{threeLatestArticles[2].title}</h3>
        <Link
          class="z-20 absolute h-full w-full border-r-2 border-b-2 border-[--accent-green] bg-cover"
          href={`${route.url.origin}/articles/${threeLatestArticles[2].id}`}
        />
        <Image layout="fullWidth" class="object-cover z-0 w-full h-full absolute" src={threeLatestArticles[2].mainImg.src}  alt={threeLatestArticles[2].mainImg.alt}/>
      </div>
    </div>
  );
});
