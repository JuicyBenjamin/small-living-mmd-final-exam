import { component$ } from "@builder.io/qwik";
import { routeLoader$, Link } from "@builder.io/qwik-city";
import { Image } from '@unpic/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

interface rmCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const useCharacterLoader = routeLoader$<rmCharacter[]>(async () => {
  // This code runs only on the server, after every navigation
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=5`);
  const characters = await res.json();
  return characters.results as rmCharacter[];
});

export default component$(() => {
  const characters = useCharacterLoader();
  console.log(characters.value);

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
      {characters.value.map((chara, key) => (
        <div key={key}>
          <h2>{chara.name}</h2>
          <Link href={`/articles/${chara.id}`}><Image aspectRatio={1/1} width={300} src={chara.image}></Image></Link>
        </div>
      ))}
    </div>
  );
});


export const head: DocumentHead = {
  title: 'Articles - Small-living.dk',
  meta: [
    {
      name: 'description',
      content: 'All articles.',
    },
  ],
};
