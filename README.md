# Snippetbox

This is my implementation of [Snippetbox](https://github.com/DataDavD/letsgo_snippetbox), a project by [Alex Edwards](https://www.alexedwards.net/), in SvelteKit. I learned about this project while reading the [Let's Go book](https://lets-go.alexedwards.net/) by Alex Edwards. I decided to implement it in SvelteKit to get the ropes of how SvelteKit works.

![](screenshot.png)

## Tools Used

- [Prisma ORM](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [Planetscale](https://planetscale.com/)
- [SvelteKit](https://kit.svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](http://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [Pnpm](https://pnpm.io/)

## Running the project locally

**Clone the repository**

```bash

```

**Install dependencies**

```bash
pnpm install
```

**Setting up a database**

I am using a MySQL database in this project. You will need to either set up a local database in local instance of MySQL DBMS or you can create one on Planetscale. You need to provide the database connection string to database in the `DATABASE_URL` environment variable.

```bash
cd /path/to/cloned/repo
touch .env
```

Add the environment variable into the `.env` file.

```bash
DATABASE_URL="mysql://user:password@locahost:port/database"
```

For example

```bash
DATABASE_URL="mysql://root:password@localhost:3306/snippetbox"
```

Sync the Prisma schema with the database

```bash
pnpm run prisma:push
```

Generate the Prisma client

```bash
pnpm run prisma:generate
```

**Start the development server**

```bash
pnpm run dev
```

## Lessons Learned

1. You can define a custom font for your website from a font a font file (for example a `.otf`) in your CSS using the `@font-face` rule. This is particularly useful if the font in the design is not available as a CDN link that you can just put in your `<head>` or `@import` in the CSS.

   ```css
   @font-face {
   	font-family: 'font-name';
   	src: url('/path/to/font/file');
   	font-weight: <value> | <range>;
   	font-style: italic | normal | oblique;
   }
   ```

   **Things to note**

   - `font-family` specifies the name you want to use to reference this font in your stylesheet.
   - `src` is the location of the font file. If you are using Vite you can put it in `public/fonts` and reference it using `src: url("/fonts/filename.ext")`. Anything in the public directory is served on `/` by Vite. In this project for example I wanted to reference `public/fonts/NeueMontreal-Bold.otf`, so I used `src: url("/fonts/NeueMontreal-Bold.otf")`.
   - `font-weight` can be a single value such as `400` or `bold` if the font is not variable or a range of values like `300 700` if the font is variable.
   - If the font is not variable, you are likely going to have multiple font files for the different weights. You can create multiple `@font-face` rules with the same `font-family` name a different value for the `font-weight` to specify the different weights for the font.

   > Check out my `@font-face` definition in `style.css`

2. CSS grid can create a stacking context which allows you to stack children elements without taking them out of the document flow like `position: absolute` would do. This can be a useful technique in a lot of situations.

3. You can make an SVG responsive by replacing the `width` and `height` attributes with the `viewBox` attribute. For example if you have an SVG with `<svg width=20 height=10>...</svg>` you can replace that with `<svg viewBox="0 0 20 10">...</svg>`. They syntax for `viewBox` goes as `viewBox="x-offset y-offset width height"`.

4. When building your UI using a UI framework like React or Svelte, build the UI first before splitting it into components.
