function catchHandler(config) {
  const baseURL = new URL(config.baseURL);

  return async (options) => {
    const cache = await self.caches.open(config.fallbacksCacheName);
    let fallback = "/offline/";
    if (options.request.destination === "image") {
      fallback = config.fallbacksImage;
    } else {
      const lang = getLanguageFromRequest(options.request, config);
      if (lang !== "") {
        fallback = "/" + lang + fallback;
      }
      fallback = baseURL.pathname.replace(/\/+$/, "") + fallback;
    }
    return (await cache.match(fallback)) || Response.error();
  };
}

function getLanguageFromRequest(request, config): string {
  let url: string = request.url.toString();
  url = url.replace(config.baseURL, "");
  const paths = url.split("/");
  if (paths.length > 0 && config.langs.includes(paths[0])) {
    return paths[0];
  }

  return "";
}

export default catchHandler;
