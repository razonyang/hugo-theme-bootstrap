function catchHandler(config) {
  const baseURL = new URL(config.baseURL);

  return async (request) => {
    const cache = await self.caches.open(config.fallbacksCacheName);
    let offlinePage = '/offline/';
    const lang = getLanguageFromRequest(request, config);
    if (lang !== '') {
      offlinePage = '/' + lang + offlinePage;
    }
    return (
      (await cache.match(baseURL.pathname.replace(/\/+$/, '') + offlinePage)) ||
      Response.error()
    );
  };
}

function getLanguageFromRequest(request, config): string {
  let url: string = request.url.toString();
  url = url.replace(config.baseURL, '');
  const paths = url.split('/');
  if (paths.length > 0 && config.langs.includes(paths[0])) {
    return paths[0];
  }

  return '';
}

export default catchHandler;
