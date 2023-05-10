import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from "@builder.io/qwik";

export const head: DocumentHead = {
    title: 'About - Small-living.dk',
    meta: [
      {
        name: 'description',
        content: 'About page.',
      },
    ],
  };

  export default component$(()=> {
    return (
      <></>
    )
  })