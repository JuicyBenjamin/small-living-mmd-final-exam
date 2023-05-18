import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <article class={"py-20"}>
      <div class={"w-full grid grid-cols-[4fr_auto_1fr]"}>
        <span class={"border-b-2 border-green-900 w-full mb-[2rem]"}></span>
        <h2 class={"border-b-0 font-bold uppercase px-2"}>
          What is Small-living.dk?
        </h2>
        <span class={"border-b-2 border-green-900 w-full mb-[2rem]"}></span>
      </div>
      <div class={"flex justify-center pt-8 px-16 gap-12"}>
        <section class="px-">
          <Image
            src="https://picsum.photos/400"
            width={500}
            aspectRatio={1 / 1}
            alt="Some picture"
            class={"border-4 border-green-900"}
          ></Image>
        </section>
        <section>
          <p class={"max-w-[55ch] pb-4"}>
            Living in a small space can be challenging, but it doesn't have to
            be. Our blog offers tips and tricks to help you make the most of
            your space, no matter how small it is.
          </p>
          <p class={"max-w-[55ch] pb-4"}>
            From organization hacks to storage solutions, we have everything you
            need to create a cozy and comfortable home, including small living
            in van life.
          </p>
          <p class={"max-w-[55ch] pb-4"}>
            By making the most of your small space, you can reduce your carbon
            footprint and live a more eco-friendly lifestyle, whether you're
            living in a tiny house, an apartment, or a van.
          </p>
        </section>
      </div>
    </article>
  );
});
