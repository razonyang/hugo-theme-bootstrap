import { registerRoute, setCatchHandler } from 'workbox-routing';
import precacheStyles from './precache-styles';
import { catchHandler } from './handlers';
import { fontRoute, imageRoute, pageRoute, scriptRoute, styleRoute } from './routes';

registerRoute(fontRoute(config));
registerRoute(imageRoute(config));
registerRoute(pageRoute(config));
registerRoute(scriptRoute(config));
registerRoute(styleRoute(config));

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(config.fallbacksCacheName)
      .then((cache) => cache.addAll(config.fallbacks))
  );
  event.waitUntil(precacheStyles(config));
});

setCatchHandler(catchHandler(config));
