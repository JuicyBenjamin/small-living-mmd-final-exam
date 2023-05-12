import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div class="w-full grid grid-cols-2">
      <div class="grid grid-rows-2 relative">
        <div class="relative flex flex-col justify-end">
          <div class="absolute p-4">
            <h2 class="text-3xl">Yolo</h2>
            <p>Yolo some more</p>
          </div>
          <Image class="object-cover h-full" layout="fullWidth" src="https://picsum.photos/1920/1080" />
        </div>
        <div class="relative flex flex-col justify-end">
          <div class="absolute p-4">
            <h2 class="text-3xl">Yolo</h2>
            <p>Yolo some more</p>
          </div>
          <Image class="object-cover h-full" layout="fullWidth" src="https://picsum.photos/1920/1080" />
        </div>
      </div>
      <div class="relative flex flex-col justify-end">
        <div class="absolute p-4">
          <h2 class="text-3xl">Yolo</h2>
          <p>Yolo some more</p>
        </div>
        <Image class="object-cover" layout="fullWidth" src="https://picsum.photos/1080/1920" />
      </div>
    </div>
  )
})