import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <section>
      <div class={"w-full grid grid-cols-[1fr_auto_4fr]"}>
        <span class={"w-full mb-[3.5rem] border-b-4 border-[--dark-brown]"}></span>
        <h2 class={"border-b-0 px-2"}>
          Latest articles
        </h2>
        <span class={"w-full mb-[3.5rem] border-b-4 border-[--dark-brown]"}></span>
      </div>
      <div class="grid grid-cols-[1fr_3fr] grid-rows-[90vh] gap-12 px-20">
        <div class="relative grid grid-rows-3 gap-4">
          <div class="relative flex flex-col justify-end">
            <h3 class="absolute">Article Title</h3>
            <Image
            src="https://picsum.photos/650"
            layout={"fullWidth"}
            height={350}
            // aspectRatio={1 / 1}
            alt="Some picture"
            class="object-cover h-full border-4 border-[--accent-green]"
          ></Image>
          </div>
          <div class="relative flex flex-col justify-end">
            <h3 class="absolute">Article Title</h3>
            <Image
            src="https://picsum.photos/575"
            layout={"fullWidth"}
            height={350}
            // aspectRatio={1 / 1}
            alt="Some picture"
            class="object-cover h-full border-4 border-[--accent-green]"
          ></Image>
          </div>
          <div class="relative flex flex-col justify-end">
            <h3 class="absolute">Article Title</h3>
            <Image
            src="https://picsum.photos/1000"
            layout={"fullWidth"}
            height={350}
            // aspectRatio={1 / 1}
            alt="Some picture"
            class="object-cover h-full border-4 border-[--accent-green]"
          ></Image>
          </div>
        </div>
        <div class="relative">
          <div class="relative flex flex-col justify-end h-[90vh]">
            <h3 class="absolute">Article Title</h3>
            <Image
            src="https://picsum.photos/400"
            layout={"fullWidth"}
            height={350}
            // aspectRatio={1 / 2}
            alt="Some picture"
            class="object-cover h-full border-4 border-[--accent-green]"
          ></Image>
          </div>
        </div>
      </div>
    </section>
)})