import type { DefaultMetaData } from "./types";

type TextDirection = "ltr" | "rtl";
type Theme = "system" | "light" | "dark" | "light:only" | "dark:only";

export const siteName: string = "AstroRock";
export const textDirection: TextDirection = "ltr";
export const theme: Theme = "system";

export const metadata: DefaultMetaData = {
  titleTemplate: (pageTitle) => `${ pageTitle } — ${ siteName }`,
  description: "\U0001F680 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.",
  robots: {
    index: true,
  },
  openGraph: {
    images: [{
      url: '~/assets/images/default.png',
      width: 1200,
      height: 628,
    }],
  },
  twitter: {
    handle: '@onwidget',
    site: '@onwidget',
  },
}
