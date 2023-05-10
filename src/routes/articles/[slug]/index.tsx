import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

interface rmCharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  },
  location: {
    name: string
    url: string
  },
  image: string
  episode: string[]
  url: string
  created: string
}

export const useCharacterLoader = routeLoader$<rmCharacter>(async (requestEvent) => {
  // This code runs only on the server, after every navigation
  const res = await fetch(`https://rickandmortyapi.com/api/character/${requestEvent.params.slug}`);
  const character = await res.json();
  return character as rmCharacter;
});

export default component$ (() => {
  const character = useCharacterLoader()
  return <div>
    <h1>Article: {character.value.name}</h1>
    <p>Location: {character.value.location.name}</p>
    <p>Origin: {character.value.origin.name}</p>
    <p>Species {character.value.species}</p>
  </div>
  })

  export const head: DocumentHead = {
    //**  title: `${character.value.name} Small-living.dk`,
    //???? Can it be dynamic??
    meta: [
      {
        name: 'description',
        content: 'Small living is a website about how and why to live small.',
      },
    ],
  };
  