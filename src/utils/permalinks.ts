import { trim } from '~/utils/utils';
import config from "../../astro.config.ts";

export const trimSlash = (s: string) => trim(trim(s, '/'));

/** */
export const getCanonical = (path: string): string => {
  if (path.length <= 0) {
    throw new Error("Empty string is given as a path. If you want to get canonical path of index, give \"/\" as the path.");
  }

  const url: string = new URL(path, config.site).href;

  if (config.trailingSlash === "never" && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (config.trailingSlash === "always" && !url.endsWith('/')) {
    return url + '/';
  } else {
    return url;
  }
};

/** */
export const getAsset = (path: string): string =>
  '/' +
  [(config.base ?? "/"), path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
