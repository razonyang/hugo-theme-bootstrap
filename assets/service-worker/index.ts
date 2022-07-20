import { registerRoute, setCatchHandler } from 'workbox-routing';
import precacheStyles from './precache-styles';
import { catchHandler } from './handlers';
import { imageRoute, pageRoute, scriptRoute, styleRoute } from './routes';

registerRoute(scriptRoute(config));
registerRoute(imageRoute(config));
registerRoute(styleRoute(config));
registerRoute(pageRoute(config));

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(config.fallbacksCacheName)
      .then((cache) => cache.addAll(config.fallbacks))
  );
  event.waitUntil(precacheStyles(config));
});

setCatchHandler(catchHandler(config));
