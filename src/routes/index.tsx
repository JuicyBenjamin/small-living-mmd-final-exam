import { component$ } from '@builder.io/qwik';

import Hero from '~/components/hero';
import ImageTextSection from '~/components/imageTextSection';
import LatestArticlesSection from '~/components/latestArticlesSection';
import Quote from '~/components/quote';
import VideoSection from '~/components/videoSection/videoSection';

import type { DocumentHead } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <>
      <Hero />
      <ImageTextSection />
      <LatestArticlesSection />
      <Quote />
      <VideoSection />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Small-living.dk',
  meta: [
    {
      name: 'description',
      content: 'Small living is a website about how and why to live small.',
    },
  ],
};
