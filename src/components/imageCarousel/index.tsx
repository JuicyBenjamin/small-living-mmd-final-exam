import { $, component$, useStore } from "@builder.io/qwik";

export interface ImageCarouselProps {
  images: string[];
}

export default component$<ImageCarouselProps>(({ images }) => {
  const currentImages = useStore({
    images: images.slice(0, 3),
    count: 0
  })

  const handleLeftClick = $(() => {
    if (currentImages.count === 0) {
      return
    }
    currentImages.count--
    currentImages.images = images.slice(currentImages.count, currentImages.count + 3)
  })

  const handleRightClick = $(() => {
    if (currentImages.count + 3 === images.length) {
      return
    }
    currentImages.count++
    currentImages.images = images.slice(currentImages.count, currentImages.count + 3)
  })

  return (
    <section
      aria-label="Image Carousel"
      class="flex gap-4 w-full justify-center"
    >
      { currentImages.count > 0 ? <button class="w-4" onClick$={handleLeftClick}>{"<="}</button> : <div class="w-4" />}
      {currentImages.images.map((image, key) => (
        <img class="aspect-[9/16] w-72 object-cover" src={image} key={key}/>
        ))}
    { currentImages.count + 3 < images.length ? <button class="w-4" onClick$={handleRightClick}>{"=>"}</button> : <div class="w-4" />}
    </section>
  );
});
