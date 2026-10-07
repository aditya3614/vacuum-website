# Vacuum website

Landing page for [Vacuum](https://github.com/aditya3614/vacuum-mac-app), built with React and Vite.

```sh
npm install
npm run dev       # local dev server
npm run build     # static site in dist/
npm run preview   # serve the built site
```

`dist/` is plain static files, so it can go on GitHub Pages, Netlify, Vercel or any web server.

The download buttons point to the latest GitHub release (`releases/latest/download/Vacuum.zip`), so publishing a new release updates the link automatically. Text that is used in more than one place, like the download link, version and paths, lives in `src/content.js`.
