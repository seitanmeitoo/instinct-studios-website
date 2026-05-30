const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ONE_DAY = 60 * 60 * 24;
const ONE_YEAR = 60 * 60 * 24 * 365;

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

app.use(
  compression({
    level: 6,
    threshold: 1024,
    filter: (req, res) => {
      if (req.headers['x-no-compression']) return false;
      return compression.filter(req, res);
    },
  })
);

function setCacheHeaders(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.html') {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  } else if (['.css', '.js', '.woff', '.woff2', '.ttf', '.otf'].includes(ext)) {
    res.setHeader('Cache-Control', `public, max-age=${ONE_YEAR}, immutable`);
  } else if (['.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg', '.ico', '.gif'].includes(ext)) {
    res.setHeader('Cache-Control', `public, max-age=${ONE_DAY * 30}`);
  } else {
    res.setHeader('Cache-Control', `public, max-age=${ONE_DAY}`);
  }
}

app.use(
  express.static(path.join(__dirname), {
    etag: true,
    lastModified: true,
    maxAge: 0,
    setHeaders: setCacheHeaders,
  })
);

app.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
