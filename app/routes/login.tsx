// app/routes/login.ts
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator, supabaseStrategy } from "~/auth.server";
export const loader: LoaderFunction = async ({ request }) =>
  supabaseStrategy.checkSession(request, {
    successRedirect: "/private",
  });

export const action: ActionFunction = async ({ request }) =>
  authenticator.authenticate("sb", request, {
    successRedirect: "/private",
    failureRedirect: "/login",
  });

export default function LoginPage() {
  return (
    <div className="container">
      <Form method="post">
        <input type="email" name="email" />
        <input type="password" name="password" />
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleText0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Text input
            </label>
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleText0"
              placeholder="Text input"
            />
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleText0"
              placeholder="Text input"
            />
          </div>
        </div>
        <button>Sign In</button>
      </Form>
    </div>
  );
}
