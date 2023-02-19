import { registerRoute, setCatchHandler } from "workbox-routing";
import precacheAssets from "./precache";
import { catchHandler } from "./handlers";
import {
  fontRoute,
  imageRoute,
  pageRoute,
  scriptRoute,
  styleRoute,
} from "./routes";

registerRoute(fontRoute(config));
registerRoute(imageRoute(config));
registerRoute(pageRoute(config));
registerRoute(scriptRoute(config));
registerRoute(styleRoute(config));

self.addEventListener("install", (event) => {
  if (config.fallbacks) {
    event.waitUntil(
      caches
        .open(config.fallbacksCacheName)
        .then((cache) => cache.addAll(config.fallbacks))
        .catch((error) => {
          console.log("unable to cache fallbacks:", error);
        })
    );
  }
  event.waitUntil(precacheAssets(config));
  if (config.fonts) {
    event.waitUntil(
      caches
        .open(config.fontsCacheName)
        .then((cache) => cache.addAll(config.fonts))
        .catch((error) => {
          console.log("unable to cache fonts:", error);
        })
    );
  }
  if (config.images) {
    event.waitUntil(
      caches
        .open(config.imagesCacheName)
        .then((cache) => cache.addAll(config.images))
        .catch((error) => {
          console.log("unable to cache images:", error);
        })
    );
  }
  if (config.pages) {
    event.waitUntil(
      caches
        .open(config.pagesCacheName)
        .then((cache) => cache.addAll(config.pages))
        .catch((error) => {
          console.log("unable to cache pages:", error);
        })
    );
  }
  if (config.scripts) {
    event.waitUntil(
      caches
        .open(config.scriptsCacheName)
        .then((cache) => cache.addAll(config.scripts))
        .catch((error) => {
          console.log("unable to cache scripts:", error);
        })
    );
  }
  if (config.styles) {
    event.waitUntil(
      caches
        .open(config.stylesCacheName)
        .then((cache) => cache.addAll(config.styles))
        .catch((error) => {
          console.log("unable to cache styles:", error);
        })
    );
  }
});

setCatchHandler(catchHandler(config));
