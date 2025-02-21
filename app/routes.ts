import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("post/:postId", "routes/post.tsx"),

  /**
   * Option 1: Nested routes
   * Don't forget to add the `Outlet` component in the parent component.
   *    RESULT: will be /dashboard/settings instead of /settings
   */
  route("dashboard", "routes/dashboard.tsx", [
    // Will be /dashboard/TEST/settings
    // ...prefix("TEST", [route("settings", "routes/settings.tsx")]),
    route("settings", "routes/settings.tsx"),
  ]),

  /**
   * Option 2: Layout routes
   * Don't forget to add the `Outlet` component in the layout component.
   *
   * You will create a layout component that wraps the `Outlet` component.
   * The layout component will be used to render the layout for the nested routes.
   *  RESULT: will be /settings instead of /dashboard/settings
   */
  //   layout("routes/dashboard.tsx", [route("settings", "routes/settings.tsx")]),
] satisfies RouteConfig;
