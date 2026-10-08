# Vacuum website

Landing page for Vacuum, a desktop vacuum cleaner for macOS, built with React and Vite.

```sh
npm install
npm run dev       # local dev server
npm run build     # static site in dist/
npm run preview   # serve the built site
```

`dist/` is plain static files, so it can go on GitHub Pages, Netlify, Vercel or any web server.

The download buttons point to the latest release of this repo (`releases/latest/download/Vacuum.zip`). To ship a new version, create a new release here with `Vacuum.zip` attached and the buttons pick it up automatically. Text that is used in more than one place, like the download link, version and paths, lives in `src/content.js`.
