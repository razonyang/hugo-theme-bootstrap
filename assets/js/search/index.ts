import { default as params } from "@params";

(() => {
  "use strict";

  const shortcut =
    params?.search?.shortcut === undefined ? ["/"] : params.search.shortcut;

  const keys = {};

  const press = (e: KeyboardEvent) => {
    if (e.type === "keydown") {
      keys[e.key] = 1;
    } else {
      delete keys[e.key];
    }
  };

  const isPressed = (expectedKeys: Array<string>): boolean => {
    for (const key of expectedKeys) {
      if (!(key in keys)) {
        return false;
      }
    }

    return true;
  };

  if (shortcut.length > 0) {
    document.addEventListener("keydown", (e) => {
      press(e);
      if (isPressed(shortcut)) {
        (
          document.querySelector("input.search-input") as HTMLInputElement
        )?.focus();
        e.preventDefault();
      }
    });
    document.addEventListener("keyup", press);
  }
})();
