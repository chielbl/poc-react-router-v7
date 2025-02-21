import { Form, useFetcher, useNavigate, useNavigation } from "react-router";
import type { Route } from "./+types/post";

/**
 * What does the loader function do?
 * - It is used to fetch data that the component needs.
 * - The loader function is called on the server and the client, BEFORE the component is rendered.
 * - The loader function is called with a `params` object that contains the route parameters.
 * - The loader function must return an object and passed to the component as props or can return a Promise.
 * - The loader function failed, the error is passed to the `ErrorBoundary` and render the component.
 */

// Server and client
// export async function loader({ params }: Route.LoaderArgs) {
//   const { postId } = params;
//   return { postId };
// }
// Only client
// export async function clientLoader({ params }: Route.ClientLoaderArgs) {
//   const { postId } = params;
//   return { postId };
// }

/**
 * What does the action function do?
 * - It is used for data mutation, analytics, logging, etc.
 */
// Only server
// export async function action({ params }: Route.ActionArgs) {
//   console.log("🚀 ~ action ~ run only server");
//   return { params };
// }
// Only client
export async function clientAction({ params }: Route.ClientActionArgs) {
  console.log("🚀 ~ action ~ run only client");
  //   return { params };
  return { isDeleted: true };
}

export default function Post({ params, loaderData }: Route.ComponentProps) {
  //   console.log("🚀 ~ Post ~ params:", params);
  //   console.log("🚀 ~ Post ~ loaderData:", loaderData);

  //   It fetches data from the server and client.
  const { Form, state, data } = useFetcher();
  console.log("🚀 ~ Post ~ fetcher:", data?.isDeleted);
  console.log("🚀 ~ Post ~ state:", state);
  //   Hook to use the navigate function.
  const navigate = useNavigate();
  //   Hook to use the navigation state.
  const { location } = useNavigation();
  const isNavigating = Boolean(location);

  if (isNavigating) {
    return <p>Is navigating ...</p>;
  }

  return (
    <div>
      <h1>Post</h1>
      <p>This is the post page.</p>

      {/* <Form method="delete">
        <button type="submit">Delete</button>
      </Form> */}

      <Form method="delete">
        <button type="submit">Delete</button>
      </Form>

      <button onClick={() => navigate("/")}>redirect or back</button>
    </div>
  );
}
