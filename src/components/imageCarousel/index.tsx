import { qwikify$ } from '@builder.io/qwik-react';
import { Carousel } from 'react-responsive-carousel';

export default qwikify$(() => {

  return (
    <Carousel>
      <div>
        <h1>yolo manner</h1>
        <p>some text just because</p>
      </div>
      <div>
        <h1>yolo manner</h1>
        <p>some text just because</p>
      </div>
      <div>
        <h1>yolo manner</h1>
        <p>some text just because</p>
      </div>
    </Carousel>
  );
}, { eagerness: 'hover' });
