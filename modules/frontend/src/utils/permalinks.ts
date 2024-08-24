import config from "../../astro.config.ts";

import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));

/** */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, config.site));
  if (config.trailingSlash === "never" && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (config.trailingSlash === "always" && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};
