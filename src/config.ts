type TextDirection = "ltr" | "rtl";
type Theme = "system" | "light" | "dark" | "light:only" | "dark:only";

export const siteName: string = "AstroWind";
export const textDirection: TextDirection = "ltr";
export const theme: Theme = "system";

export const metadata = {
  title: {
    default: "AstroWind",
    template: "%s — AstroWind",
  },
  description: "\U0001F680 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    site_name: "AstroWind",
    images: [{
      url: '~/assets/images/default.png',
      width: 1200,
      height: 628,
    }],
    type: "website",
  },
  twitter: {
    handle: '@onwidget',
    site: '@onwidget',
    cardType: "summary_large_image",
  },
}
