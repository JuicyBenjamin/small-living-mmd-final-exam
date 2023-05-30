import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

import { ArticlesContent } from "~/content";

export default component$(() => {
  const route = useLocation();
  console.log("route is : ", route);

  const maxArticle = ArticlesContent.length;

  return (
    <section class="grid grid-cols-[1fr_1fr_repeat(7,2fr)_1fr_1fr] grid-rows-[1fr_5fr_1fr] w-[100vw] h-[65vh]">
      <div class="col-start-1 col-end-2 row-start-2 row-end-2 relative grid">
        <Link
          href={`${route.url.origin}/articles/${
            Number(route.params.slug) < 1
              ? maxArticle
              : Number(route.params.slug) - 1
          }`}
          class="group grid bg-[url('https://picsum.photos/1200/200')] bg-cover hover:scale-125"
        >
          <div class="opacity-0 hover:backdrop-blur-lg h-full w-full group-hover:opacity-100 text-center pl-4 text-[--light-white]" style="text-orientation:upright; writing-mode: vertical-lr;">Previous</div>
        </Link>
      </div>
      <div class="col-start-3 col-end-10 row-start-1 row-end-4 ">
        <Image
          src="https://picsum.photos/1000/250"
          layout={"fullWidth"}
          //   height={350}
          
          // aspectRatio={1 / 1}
          alt="Some picture"
          class="object-cover h-full"
        ></Image>
      </div>
      <div class="col-start-11 col-end-12 row-start-2 row-end-2 relative grid">

            <Link
              href={`${route.url.origin}/articles/${
                Number(route.params.slug) > maxArticle
                  ? 1
                  : Number(route.params.slug) + 1
              }`}
              class="group grid bg-[url('https://picsum.photos/1300/200')] bg-cover hover:scale-125"
            >
               <div class="opacity-0 hover:backdrop-blur-lg h-full w-full group-hover:opacity-100 text-center pl-4 text-[--light-white]" style="text-orientation:upright; writing-mode: vertical-lr;">Next</div>
            </Link>
      </div>
    </section>
  );
});
