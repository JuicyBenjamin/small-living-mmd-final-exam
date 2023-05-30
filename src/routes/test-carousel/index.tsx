import { component$ } from "@builder.io/qwik";

import ImageCarousel from "~/components/imageCarousel";

export default component$(() => {
  const images = [
    'https://picsum.photos/211/300',
    'https://picsum.photos/210/300',
    'https://picsum.photos/209/300',
    'https://picsum.photos/208/300',
    'https://picsum.photos/207/300',
    'https://picsum.photos/206/300',
    'https://picsum.photos/205/300',
    'https://picsum.photos/204/300',
    'https://picsum.photos/203/300',
    'https://picsum.photos/201/300'
  ]
    return (
    <div class="grid w-full justify-center">
      <ImageCarousel images={images} />
    </div>
)})