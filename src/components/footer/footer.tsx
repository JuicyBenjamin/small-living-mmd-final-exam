import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";
import { constantContent } from "~/content";
import { Logo } from "../icons/logo";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="flex flex-col w-100 pt-20 pb-4 bg-green-800 text-white">
      <div class="grid grid-cols-[1fr_1fr_1fr] pb-10">
        <section class="justify-self-center self-end">
          <p>{constantContent.footer.left.cvr}</p>
          <div>
            <a
              class="text-white underline"
              href={constantContent.footer.left.cookies.href}
              target={
                constantContent.footer.left.cookies.target ? "_blank" : null
              }
            >
              {constantContent.footer.left.cookies.text}
            </a>
          </div>
        </section>
        <section class="flex flex-col justify-self-center">
          <a class="flex justify-center pb-10" href="/">
            <Logo />
          </a>
          <label for="newsletter" class="max-w-[40ch] text-center">
            {constantContent.footer.middle.newsletter.text}
          </label>
          <div class="flex justify-center mt-4">
            <input
              class="text-white pt-4 border-white border-b-[1px] bg-transparent"
              name={constantContent.footer.middle.newsletter.input.name}
              id={constantContent.footer.middle.newsletter.input.id}
              type="text"
              placeholder={
                constantContent.footer.middle.newsletter.input.placeholder
              }
            />
            <button class="border-[1px] border-white ml-2 px-[10px] uppercase"
              formAction={
                constantContent.footer.middle.newsletter.button.action
              }
            >
              {constantContent.footer.middle.newsletter.button.text}
            </button>
          </div>
        </section>
        <section class="justify-self-center self-end flex gap-2 justify-center">
          <a href="#">Fb</a>
          <a href="#">Tik-Tok</a>
          <a href="#">Insta</a>
        </section>
      </div>

      <p class="text-center">Made by fire squad | {serverTime.value.year}</p>
    </footer>
  );
});
