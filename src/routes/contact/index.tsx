import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import Button from '~/components/button';

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
      <div>
        <h1>Yolo</h1>
        <Button color="brown">
          Yolo
        </Button>
      </div>
    )
  })