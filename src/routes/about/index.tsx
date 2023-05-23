import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from "@builder.io/qwik";

import ImageTextSection from '~/components/imageTextSection/imageTextSection';

import { aboutContent } from '~/content';

// todo
// * pass the right content with props

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
      aboutContent.map((section)=> {
       <ImageTextSection content = {section}></ImageTextSection>
      })

    )
  })