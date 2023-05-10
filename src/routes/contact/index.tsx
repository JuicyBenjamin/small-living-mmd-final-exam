import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export const head: DocumentHead = {
    title: 'Contact - Small-living.dk',
    meta: [
      {
        name: 'description',
        content: 'Contact page.',
      },
    ],
  };

  export default component$(()=> {
    return (
      <></>
    )
  })