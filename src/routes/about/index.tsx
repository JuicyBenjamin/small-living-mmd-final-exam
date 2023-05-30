import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from "@builder.io/qwik";

import { aboutContent } from '~/content';
import ImageTextSection from '~/components/imageTextSection';

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
      <>
      <h1 class="text-center">About</h1>
      {aboutContent.map((articles, key)=> (
      <ImageTextSection key={key} content={articles}/>
      ))}
      </>
    )
  })