import type { APIContext } from "astro";

export const GET = (context: APIContext) => {
  return new Response("Authentication by Google OAuth complete.");
};
