import { serve } from "bun";
import index from "./index.html";
import { createClient } from "@supabase/supabase-js";
import { createServerClient, parseCookieHeader } from "@supabase/ssr";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/supabase": {
      async GET(req) {
        const supabase = createServerClient(
          process.env.BUN_PUBLIC_SUPABASE_URL!,
          process.env.BUN_PUBLIC_SUPABASE_ANON_KEY!,
          {
            cookies: {
              getAll() {
                return parseCookieHeader("");
              },
              setAll() {
                return null;
              },
            },
          }
        );

        // const supabase = createClient(
        //   process.env.BUN_PUBLIC_SUPABASE_URL!,
        //   process.env.BUN_PUBLIC_SUPABASE_ANON_KEY!,
        //   {
        //     auth: {
        //       persistSession: false,
        //     },
        //   }
        // );

        const { data, error } = await supabase.auth.getSession();
        return Response.json({ error, data });
      },
    },

    // "/api/hello": {
    //   async GET(req) {
    //     return Response.json({
    //       message: "Hello, world!",
    //       method: "GET",
    //     });
    //   },
    //   async PUT(req) {
    //     return Response.json({
    //       message: "Hello, world!",
    //       method: "PUT",
    //     });
    //   },
    // },

    // "/api/hello/:name": async (req) => {
    //   const name = req.params.name;
    //   return Response.json({
    //     message: `Hello, ${name}!`,
    //   });
    // },
  },

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
