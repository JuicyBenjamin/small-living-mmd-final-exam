import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { constantContent } from "~/content";

export default component$(() => {
  const navigationContent = constantContent.header.navigation;

  return (
    <ul class={"flex flex-row justify-center gap-12 py-12"}>
      {navigationContent.map((link, key) => (
        <li key={key}>
          <Link
            class="uppercase"
            {... link.target ? { target: "_blank"} : null}
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
        )
      )}
    </ul>
  );
});
