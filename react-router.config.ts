import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA / client side mode set this to `false`
  ssr: true,

  /**
   * What does it do?
   * It will render the pages in the array before the server starts.
   * So, what that means is that when the server starts, it will have the HTML for these pages already generated on build time!
   */
  //   async prerender() {
  //     return ['/', '/about'];
  //   }
} satisfies Config;
