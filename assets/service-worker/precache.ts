const styleReg = new RegExp(
  /<link data-precache.*?rel="?stylesheet"?.*?href="?([^"\s]+)"?[^>]*>/g
);
const scriptReg = new RegExp(
  /<script data-precache.*?src="?([^"\s]+)"?[^>]*><\/script>/g
);

function precacheAssets(config) {
  return fetch(config.homepage)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      // There is no way to determine the final URL of the styles processed by PostProcess at build time.
      const assets = {
        scripts: [],
        styles: [],
      };
      let match;
      while ((match = styleReg.exec(html)) !== null) {
        assets.styles.push(match[1]);
      }
      while ((match = scriptReg.exec(html)) !== null) {
        assets.scripts.push(match[1]);
      }
      return assets;
    })
    .then((assets) => {
      return (
        self.caches
          .open(config.stylesCacheName)
          .then((cache) => cache.addAll(assets.styles)) &&
        self.caches
          .open(config.scriptsCacheName)
          .then((cache) => cache.addAll(assets.scripts))
      );
    })
    .catch((error) => {
      console.error("unable to fetch and precache styles", error);
    });
}

export default precacheAssets;
