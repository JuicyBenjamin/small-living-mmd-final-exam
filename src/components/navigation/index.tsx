import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { constantContent } from "~/content";

export default component$(() => {
  const navigationContent = constantContent.header.navigation;

  const burgerOpen = useSignal(false);

  return (
    <>
      <div class="md:opacity-0 opacity-100 absolute top-3 right-5">
        <button onClick$={() => (burgerOpen.value = !burgerOpen.value)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-house-door"
            viewBox="0 0 16 16"
          >
            <path
              d={
                burgerOpen.value
                  ? "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  : "M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              }
            />
          </svg>
        </button>
      </div>

      <ul
        class={`${
          burgerOpen.value ? "md:flex" : "hidden"
        } md:flex md:flex-row md:justify-center md:gap-12 md:py-12 text-center py-8`}
      >
        {navigationContent.map((link, key) => (
          <li key={key}>
            <Link
              class="uppercase"
              {...(link.target ? { target: "_blank" } : null)}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
});
