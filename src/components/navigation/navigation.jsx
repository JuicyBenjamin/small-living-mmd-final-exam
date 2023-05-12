import { component$ } from "@builder.io/qwik";

import { constantContent } from "~/content";

export default component$(() => {
  const navigationContent = constantContent.header.navigation;
  navigationContent.map((link) => {console.log(link.name)});

  
  // console.log("__",navigationContent)
  return (
    <ul class={"flex flex-row justify-center gap-12 py-12"}>
      {navigationContent.map((link, key) => (
        <li key={key}>
          <a
            class={"uppercase"}
            target={link.target ? "blank" : null}
            href={link.href}
          >
            {link.name}
          </a>
        </li>
        )
      )}
      {/* <li>
        <a class={"uppercase"} href="/">Home</a>
      </li>
      <li>
        <a class={"uppercase"} href="/articles">Articles</a>
      </li>
      <li>
        <a class={"uppercase"}href="/about">About</a>
      </li>
      <li>
        <a class={"uppercase"} href="/contact">Contact</a>
      </li> */}
    </ul>
  );
});
