# AstroRock

**AstroRock** is a free and open-source template to make your website using **[Astro 4.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**. Ready to start a new project and designed taking into account web best practices.

[![Licensed under MIT](https://img.shields.io/github/license/phanect/astrorock?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/phanect/astrorock/blob/main/LICENSE.md)

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

<br>

## Demo

📌 [https://astrorock.phanective.org/](https://astrorock.phanective.org/)

## Getting started

**AstroRock** tries to give you quick access to creating a web app using [Astro 4](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/).

### Project structure

Inside **AstroRock** template, you'll see the following folders and files:

```
/
├── public/
│   └── _headers
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- robots.txt.ts
│   │   └── ...
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   ├── config.ts
│   └── navigation.ts
├── package.json
├── astro.config.ts
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

[![Edit AstroRock on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/phanect/astrorock/tree/main) [![Open in Gitpod](https://svgshare.com/i/xdi.svg)](https://gitpod.io/?on=gitpod#https://github.com/phanect/astrorock) [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/phanect/astrorock)

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run check`       | Detect errors by `astro check` and Biome           |
| `npm run fix`         | Fix errors detected by `astro check` and Biome     |

#### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro`
- `src/styles/global.css`

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

## License & Credits

Licensed under the [MIT License](./LICENSE.md).

AstroRock is a fork of AstroWind ([Website](https://astrowind.vercel.app/) | [Source Code](https://github.com/onwidget/astrowind)) created by [onWidget](https://onwidget.com) and its [contributors](https://github.com/onwidget/astrowind/graphs/contributors).
