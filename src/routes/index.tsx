import { component$ } from '@builder.io/qwik';

import LatestArticles from '~/components/lastestArticles';
import ImageTextSection from '~/components/imageTextSection';
import FourArticles from '~/components/fourArticles';
import Quote from '~/components/quote';
import VideoSection from '~/components/videoSection/videoSection';
import { homeContent } from '~/content';


import type { DocumentHead } from '@builder.io/qwik-city';



export default component$(() => {

  const imageTextSectionContent = homeContent.imageSection;
  
  
  return (
    <>
      <LatestArticles />
      <ImageTextSection content= {imageTextSectionContent} />
      <FourArticles />
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
