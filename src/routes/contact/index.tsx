import { DocumentHead, Form } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import Button from "~/components/button";

export const head: DocumentHead = {
  title: "Contact - Small-living.dk",
  meta: [
    {
      name: "description",
      content: "Contact page.",
    },
  ],
};


export default component$(() => {

  return (
    <div>
      <h1 class="text-center">Contact</h1>
      <p class="md:w-[75ch] mx-auto pb-12 px-4">
        If you would like to get in touch regarding co-writing an article, an
        interview or something else, don't hesitate to contact us with the
        contact form below!
      </p>
      <div class="bg-[--dark-white] p-12 border-[--accent-green] border-[1px] md:w-[95ch] mb-24 md:mx-auto drop-shadow-[0_0_16px_rgba(50,42,29,.5)] mx-4">
        <Form onSubmitCompleted$={()=> alert("This form isn't yet connected to any backend yet. In the real version you would get a confimartion mail.")} class="md:grid md:grid-cols-2 md:gap-12">
          <div class="pb-8">
            <div class="flex flex-col pb-4">
              <label for="firstNameContact">
                First name <em>&#x2a;</em>
              </label>
              <input
                id="firstNameContact"
                name="firstNameContact"
                required
                type="text"
                placeholder="Penny"
              />
            </div>

            <div class="flex flex-col pb-4">
              <label for="lastNameContact">
                Last name <em>&#x2a;</em>
              </label>
              <input
                id="lastNameContact"
                name="lastNameContact"
                required
                type="text"
                placeholder="Wise"
              />
            </div>

            <div class="flex flex-col pb-4">
              <label for="emailContact">
                E-mail <em>&#x2a;</em>
              </label>
              <input
                id="emailContact"
                name="emailContact"
                required
                type="email"
                placeholder="name@mail.con"
              />
            </div>
            <div>
              <input
                id="articleCheckContact"
                name="articleCheckContact"
                type="checkbox"
              />
              <label for="articleCheckContact">
                I would like to write an article
              </label>
            </div>
            <div>
              <input
                id="interviewCheckContact"
                name="interviewCheckContact"
                type="checkbox"
              />
              <label for="interviewCheckContact">
                I would like to have an interview
              </label>
            </div>
            <div>
              <input
                id="elseCheckContact"
                name="elseCheckContact"
                type="checkbox"
              />
              <label for="elseCheckContact">Something else</label>
            </div>
          </div>
          <div class="grid">
            <label for="commentContact">
              Comment <em>&#x2a;</em>
            </label>
            <textarea
              name="commentContact"
              id="commentContact"
              cols={40}
              rows={10}
              class="mb-4 w-[70vw] md:w-full"
            ></textarea>
            <div class="text-center justify-self-center">
            <Button color="brown">Submit</Button> 
            </div>

          </div>
 
        </Form>
      </div>
    </div>
  );
});
