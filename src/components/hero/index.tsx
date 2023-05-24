import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div class="w-full grid grid-cols-2">
      <div class="grid grid-rows-2 relative h-[90vh]">
        <div class="relative flex flex-col justify-end">
          <h3 class="absolute p-4 bg-opacity-50">Title</h3>
          <Image
            src="https://picsum.photos/1000"
            layout={"fullWidth"}
            height={350}
            // aspectRatio={1 / 1}
            alt="Some picture"
            class="object-cover h-full border-4 border-r-2 border-b-2 border-[--accent-green]"
          ></Image>
        </div>
        <div class="relative flex flex-col justify-end">
          <h3 class="absolute p-4">Title</h3>

          <Image
            src="https://picsum.photos/800"
            layout={"fullWidth"}
            height={350}
            // aspectRatio={1 / 1}
            alt="Some picture"
            class="object-cover h-full border-4 border-r-2 border-b-2 border-[--accent-green]"
          ></Image>
        </div>
      </div>
      <div class="relative flex flex-col justify-end h-[90vh]">
        <h3 class="absolute p-4">Title</h3>

        <Image
            src="https://picsum.photos/1200"
            layout={"fullWidth"}
            height={700}
            aspectRatio={2 / 1}
            alt="Some picture"
            class="object-cover h-full border-4 border-r-2 border-b-2 border-[--accent-green]"
          ></Image>
      </div>
    </div>
  );
});
