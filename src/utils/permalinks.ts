import { trim } from '~/utils/utils';
import config from "../../astro.config.ts";

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

/** */
export const getAsset = (path: string): string =>
  '/' +
  [(config.base ?? "/"), path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
