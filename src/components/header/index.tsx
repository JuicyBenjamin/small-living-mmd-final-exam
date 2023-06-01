import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import Navigation from "~/components/navigation";

import { Logo } from "../../assets/icons/logo";

export default component$(() => {
  return (
    <>
      <header class="flex flex-col text-white">
        <div class="z-20 flex justify-center w-full pt-4 bg-[--accent-green] pb-4">
          <Link href="/" title="small-living-logo">
            <Logo />
          </Link>
        </div>
        <Navigation />
      </header>
    </>
  );
});
