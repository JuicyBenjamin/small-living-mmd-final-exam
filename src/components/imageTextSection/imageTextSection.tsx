import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <article class={"py-20"}>
      <div class={"w-full grid grid-cols-[4fr_auto_1fr]"}><span class={"border-b-2 border-green-900 w-full mb-4"}></span><h2 class={"border-b-0 font-bold uppercase text-2xl px-2"}>{"data.title"}</h2><span class={"border-b-2 border-green-900 w-full mb-4"}></span></div>
      <div class={"flex justify-center pt-8 px-16 gap-12"}>
        <section class="px-">
          <Image
            src="https://picsum.photos/400"
            width={500}
            aspectRatio={1/1}
            alt="Some picture"
            class={"border-4 border-green-900"}
          ></Image>
        </section>
        <section>
          <h3 class={"text-xl uppercase font-bold pb-6"}>{"data.subtitle"}</h3>
          <p class={"max-w-[55ch] pb-4"}>
            {"data.paragraph :"} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quo repellendus earum exercitationem a sint
            ducimus explicabo iste magnam quis. Laudantium dolores, et accusamus
            veniam debitis maxime amet expedita exercitationem odio?
          </p>
          <p class={"max-w-[55ch] pb-4"}>
            {"data.paragraph :"} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quo repellendus earum exercitationem a sint
            ducimus explicabo iste magnam quis. Laudantium dolores, et accusamus
            veniam debitis maxime amet expedita exercitationem odio?
          </p>
          <p class={"max-w-[55ch] pb-4"}>
            {"data.paragraph :"} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quo repellendus earum exercitationem a sint
            ducimus explicabo iste magnam quis. Laudantium dolores, et accusamus
            veniam debitis maxime amet expedita exercitationem odio?
          </p>
        </section>
      </div>
    </article>
  );
});
