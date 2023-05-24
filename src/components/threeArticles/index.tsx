import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <section class="grid grid-cols-[1fr_1fr_repeat(7,2fr)_1fr_1fr] grid-rows-[1fr_5fr_1fr] mx-[-20rem] pl-[-20rem] w-[100vw] h-[65vh]">
      <div class="col-start-1 col-end-2 row-start-2 row-end-2 relative grid">
        <Image
          src="https://picsum.photos/1200/200"
          layout={"fullWidth"}
        //   height={350}
          // aspectRatio={1 / 1}
          alt="Some picture"
          class="object-cover h-full"
        ></Image>
        <span class="absolute place-self-center  text-[--accent-lillac] text-2xl backdrop-blur w-full h-full grid"><span class="absolute place-self-center">⇦</span></span>
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
        <Image
          src="https://picsum.photos/1000/200"
          layout={"fullWidth"}
        //   height={350}
        //   aspectRatio={1 / 4}
          alt="Some picture"
          class="object-cover h-full"
        ></Image>
        <span class="absolute place-self-center text-[--accent-lillac] text-2xl backdrop-blur w-full h-full grid"><span class="absolute place-self-center">⇨</span></span>
      </div>
    </section>
  );
});
