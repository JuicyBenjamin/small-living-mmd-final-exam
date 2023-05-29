import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Footer from '~/components/footer';
import Header from '~/components/header';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
    year : new Date().getFullYear()
  };
});

export default component$(() => {
  return (
    <div>
      <main>
        <Header />
        <Slot />
      </main>

          <Footer />

    </div>
  );
});
