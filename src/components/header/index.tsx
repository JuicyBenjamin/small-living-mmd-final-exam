import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import Navigation from "~/components/navigation";

import Logo from "../../assets/icons/logo.svg";

export default component$(() => {


  return (
    <>
      <header class="text-white md:h-full">
        <div class="flex flex-col md:h-full">
          <div class="z-40 flex justify-center w-full py-4 bg-[--accent-green]">
            <Link href="/" title="small-living-logo">
              <img class="w-[6.25rem] h-[6.25rem]" src={Logo} alt="Logo" />
            </Link>
          </div>
          <Navigation />
        </div>
      </header>
    </>
  );
});
