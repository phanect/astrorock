import { theme as defaultTheme, type Theme } from "~/config.ts";

declare global {
  interface Window {
    initialized?: boolean;
  }
}

export const initialize = () => {
  if (window.initialized) {
    return;
  }

  window.initialized = true;

  function attachEvent(selector: string, event: string, fn: (evt: Event, el: Element) => unknown) {
    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    if (matches && matches.length) {
      matches.forEach((elem) => {
        elem.addEventListener(event, (e) => fn(e, elem), false);
      });
    }
  }

  const onLoad = function () {
    let lastKnownScrollPosition = window.scrollY;
    let ticking = true;

    attachEvent('#header nav', 'click', function () {
      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');
      document.body.classList.remove('overflow-hidden');
      document.getElementById('header')?.classList.remove('h-screen');
      document.getElementById('header')?.classList.remove('expanded');
      document.getElementById('header')?.classList.remove('bg-page');
      document.querySelector('#header nav')?.classList.add('hidden');
      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');
    });

    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {
      elem.classList.toggle('expanded');
      document.body.classList.toggle('overflow-hidden');
      document.getElementById('header')?.classList.toggle('h-screen');
      document.getElementById('header')?.classList.toggle('expanded');
      document.getElementById('header')?.classList.toggle('bg-page');
      document.querySelector('#header nav')?.classList.toggle('hidden');
      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');
    });

    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {
      if (defaultTheme.endsWith(':only')) {
        return;
      }
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {
      const network = elem.getAttribute('data-aw-social-share');
      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));
      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));

      let href;
      switch (network) {
        case 'facebook':
          href = `https://www.facebook.com/sharer.php?u=${url}`;
          break;
        case 'twitter':
          href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
          break;
        case 'linkedin':
          href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
          break;
        case 'whatsapp':
          href = `https://wa.me/?text=${text}%20${url}`;
          break;
        case 'mail':
          href = `mailto:?subject=%22${text}%22&body=${text}%20${url}`;
          break;

        default:
          return;
      }

      const newlink = document.createElement('a');
      newlink.target = '_blank';
      newlink.href = href;
      newlink.click();
    });

    const screenSize = window.matchMedia('(max-width: 767px)');
    screenSize.addEventListener('change', function () {
      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');
      document.body.classList.remove('overflow-hidden');
      document.getElementById('header')?.classList.remove('h-screen');
      document.getElementById('header')?.classList.remove('expanded');
      document.getElementById('header')?.classList.remove('bg-page');
      document.querySelector('#header nav')?.classList.add('hidden');
      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');
    });

    function applyHeaderStylesOnScroll() {
      const header = document.querySelector('#header[data-aw-sticky-header]');
      if (!header) return;
      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {
        header.classList.add('scroll');
      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {
        header.classList.remove('scroll');
      }
      ticking = false;
    }
    applyHeaderStylesOnScroll();

    attachEvent([document], 'scroll', function () {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          applyHeaderStylesOnScroll();
        });
        ticking = true;
      }
    });
  };
  const onPageShow = function () {
    document.documentElement.classList.add('motion-safe:scroll-smooth');
    const elem = document.querySelector('[data-aw-toggle-menu]');
    if (elem) {
      elem.classList.remove('expanded');
    }
    document.body.classList.remove('overflow-hidden');
    document.getElementById('header')?.classList.remove('h-screen');
    document.getElementById('header')?.classList.remove('expanded');
    document.querySelector('#header nav')?.classList.add('hidden');
  };

  window.onload = onLoad;
  window.onpageshow = onPageShow;

  document.addEventListener('astro:after-swap', () => {
    initTheme();
    onLoad();
    onPageShow();
  });
};
