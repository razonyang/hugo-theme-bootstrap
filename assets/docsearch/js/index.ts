import docsearch from "@docsearch/js";
import { default as params } from "@params";
import { default as customOptions } from "./options";

const defaultOptions = {
  container: ".search-button",
};

const replacements = {
  appid: "appId",
  apikey: "apiKey",
  indexname: "indexName",
  disableuserpersonalization: "disableUserPersonalization",
  initialquery: "initialQuery",
};

// Replace the parameter keys, since Hugo parameters are case-insensitive.
let options = params ? params : {};
for (const name in params) {
  if (Object.prototype.hasOwnProperty.call(replacements, name)) {
    params[replacements[name]] = params[name];
    delete params[name];
  }
}

options = Object.assign(defaultOptions, options, customOptions);
console.debug("DocSearch options:", options);
docsearch(options);
