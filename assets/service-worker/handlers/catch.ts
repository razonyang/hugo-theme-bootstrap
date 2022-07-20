function catchHandler(config) {
  return async (request) => {
    console.log('catch handler', request.url);
    const cache = await self.caches.open(config.fallbacksCacheName);
    let offlinePage = '/offline/';
    const lang = getLanguageFromRequest(request, config.langs);
    if (lang !== '') {
      offlinePage = '/' + lang + offlinePage;
    }
    console.log(cache, lang, offlinePage);
    return (await cache.match(offlinePage)) || Response.error();
  };
}

function getLanguageFromRequest(request, langs): string {
  const url = new URL(request.url);
  const paths = url.pathname.split('/');
  if (paths.length > 1 && langs.includes(paths[1])) {
    return paths[1];
  }

  return '';
}

export default catchHandler;
