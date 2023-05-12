import { component$ } from "@builder.io/qwik";
// import styles from "./header.module.css";
import { Logo } from "../icons/logo";
import Navigation from "~/components/navigation/navigation"

export default component$(() => {
  return (
    <>
      <header class={'flex flex-col'}>
        <div class={'flex justify-center w-full pt-4'}>
          <a href="/" title="small-living-logo">
            <Logo />
          </a>
        </div>
<Navigation></Navigation>
      </header>
    </>
  );
});
