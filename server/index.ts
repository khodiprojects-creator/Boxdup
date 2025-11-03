import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  const distPath = join(__dirname, 'public');
  app.use(express.static(distPath));

  app.get('*', (_req, res) => {
    res.sendFile(join(distPath, 'index.html'));
  });
} else {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(vite.middlewares);
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
