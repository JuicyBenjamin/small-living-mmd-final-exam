import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import Navigation from "~/components/navigation";

import { Logo } from "../../assets/icons/logo";

export default component$(() => {


  return (
    <>
      <header class="relative mb-4 text-white h-fit">
        <div class="flex flex-col h-12">
          <div class="z-40 flex justify-center w-full pt-4 bg-[--accent-green] pb-4 h-fit">
            <Link href="/" title="small-living-logo">
              <Logo />
            </Link>
          </div>
          <Navigation />
        </div>
      </header>
    </>
  );
});
