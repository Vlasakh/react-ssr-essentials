import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import path from 'path';
import fs from 'fs';
import App from './src/App';

const app = express();

app.use(express.static('./build', { index: false }));

app.get('/*', (req, res) => {
  const reactApp = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
  );

  const tmplFile = path.resolve('./build/index.html');
  fs.readFile(tmplFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(
      // data,
      data.replaceAll('<div class="spinner">Loading...</div>', `<div class="spinner">Loading...</div>${reactApp}`),
    );
  });
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
