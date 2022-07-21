import { registerRoute, setCatchHandler } from 'workbox-routing';
import precacheAssets from './precache';
import { catchHandler } from './handlers';
import {
  fontRoute,
  imageRoute,
  pageRoute,
  scriptRoute,
  styleRoute,
} from './routes';

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
  event.waitUntil(precacheAssets(config));
  if (config.fonts) {
    event.waitUntil(
      caches
        .open(config.fontsCacheName)
        .then((cache) => cache.addAll(config.fonts))
    );
  }
  if (config.images) {
    event.waitUntil(
      caches
        .open(config.imagesCacheName)
        .then((cache) => cache.addAll(config.images))
    );
  }
  if (config.pages) {
    event.waitUntil(
      caches
        .open(config.pagesCacheName)
        .then((cache) => cache.addAll(config.pages))
    );
  }
  if (config.scripts) {
    event.waitUntil(
      caches
        .open(config.scriptsCacheName)
        .then((cache) => cache.addAll(config.scripts))
    );
  }
  if (config.styles) {
    event.waitUntil(
      caches
        .open(config.stylesCacheName)
        .then((cache) => cache.addAll(config.styles))
    );
  }
});

setCatchHandler(catchHandler(config));
