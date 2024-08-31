import type { ComponentProps } from "astro/types";
import type Header from "./components/widgets/Header.astro";
import type Footer from "./components/widgets/Footer.astro";

export const headerData: ComponentProps<typeof Header> = {
  links: [
    {
      text: "Features",
      href: "#features",
    },
    {
      text: 'Pricing',
      href: "/pricing",
    },
    {
      text: "Download",
      href: "https://github.com/phanect/astrorock",
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'About us',
          href: "/about",
        },
        {
          text: 'Contact',
          href: "/contact",
        },
        {
          text: 'Terms',
          href: "/terms",
        },
        {
          text: 'Privacy policy',
          href: "/privacy",
        },
      ],
    },
  ],
  actions: [
    {
      variant: "secondary",
      text: "Login",
      href: "#",
    },
    {
      variant: "primary",
      text: "Sign Up",
      href: "#",
    },
  ],
};

export const footerData: ComponentProps<typeof Footer> = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroRock Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: "/terms" },
    { text: 'Privacy Policy', href: "/privacy" },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/phanect/astrorock' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
