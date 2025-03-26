import { createServerClient, parseCookieHeader } from "@supabase/ssr";

const supabase = createServerClient(
  "https://saxgrrctjplofreljvps.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNheGdycmN0anBsb2ZyZWxqdnBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3ODQyMzMsImV4cCI6MjA1ODM2MDIzM30.8efp8VwQbBl0KJVGuGbrhCGjrHfunahmWhxXEhe3_R8",
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

const { error, data } = await supabase.auth.signInWithPassword({
  email: "a@b.com",
  password: "trustme",
});

console.log(error, data);
