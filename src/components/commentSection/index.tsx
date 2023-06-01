import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import Button from "../button";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <section>
      <div class={"w-full grid grid-cols-[1fr_auto_1fr]"}>
        <span
          class={"w-full mb-[3.5rem] border-b-4 border-[--dark-brown]"}
        ></span>
        <h2 class={"border-b-0 px-2"}>Comments</h2>
        <span
          class={"w-full mb-[3.5rem] border-b-4 border-[--dark-brown]"}
        ></span>
      </div>
      <div class="mx-auto md:w-[95ch] w-full px-4 py-12">
        <p>No comments yet. Be the first to share your thoughts!</p>
      </div>
      <div class="bg-[--dark-white] p-12 border-[--accent-green] border-[1px] md:w-[95ch] mb-24 md:mx-auto mx-4 drop-shadow-[0_0_16px_rgba(50,42,29,.5)]">
        <Form
          onSubmitCompleted$={() =>
            alert(
              "This form isn't yet connected to any backend yet. In the real version your comment would be submittetd to a check and posted."
            )
          }
          class="md:grid md:grid-cols-[3fr_1fr] md:gap-12"
        >
          <div class="grid-cols-1">
            <div class="md:grid md:grid-cols-[1fr_2fr] flex-col gap-4">
              <div class="flex flex-col pb-4">
                <label for="nameComment">
                  First name <em>&#x2a;</em>
                </label>
                <input
                  id="nameComment"
                  name="nameComment"
                  required
                  type="text"
                  placeholder="Penny Wise"
                />
              </div>

              <div class="flex flex-col pb-4">
                <label for="emailComment">
                  E-mail<em>&#x2a;</em>{" "}
                  <span class="text-[.6rem]">
                    (Your email address will not be published)
                  </span>
                </label>
                <input
                  id="emailComment"
                  name="emailComment"
                  required
                  type="email"
                  placeholder="name@mail.con"
                />
              </div>
            </div>
            <div class="flex flex-col pb-4">
              <label for="commentContact">
                Comment <em>&#x2a;</em>
              </label>
              <textarea
                name="commentContact"
                id="commentContact"
                cols={40}
                rows={10}
                class="mb-4"
              ></textarea>
            </div>
            <div class="flex pb-4">
              <input type="checkbox" />
              <label for="commentContact" class="ml-[5px]">
                Save my name and email in this browser for the next time I
                comment.
              </label>
            </div>
          </div>
          <div class="grid grid-rows-[4fr_1fr]">

              <Image
                layout="fullWidth"
                aspectRatio={5 / 1}
                class="md:block h-full w-full object-cover hidden"
                src="https://picsum.photos/300/500"
              ></Image>


            <div class="text-center self-end place-self-center pt-4">
              <Button color="brown">Submit</Button>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
});
