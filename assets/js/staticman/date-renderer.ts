import { formatDistance } from "date-fns";
import { enUS, zhCN, zhTW } from "date-fns/locale";

const locales = {
  en: enUS,
  "en-us": enUS,
  "zh-cn": zhCN,
  "zh-hans": zhCN,
  "zh-tw": zhTW,
  "zh-hk": zhTW,
  "zh-hant": zhTW,
};

class DateRenderer {
  private items: Array<HTMLElement>;
  private lang: string;

  constructor(items: string) {
    this.items = Array.from(
      document.querySelectorAll(items)
    ) as Array<HTMLElement>;
    this.lang = document.documentElement.getAttribute("lang").toLowerCase();
  }

  run() {
    if (!this.items) {
      return;
    }

    const now = new Date();
    this.items.forEach((item: HTMLElement) => {
      const timestamp = parseInt(item.getAttribute("data-timestamp"));
      const date = new Date(timestamp * 1000);
      item.innerText = formatDistance(now, date, {
        addSuffix: true,
        locale: this.getLocale(),
      });
    });
  }

  getLocale() {
    return this.lang in locales ? locales[this.lang] : enUS;
  }
}

export default DateRenderer;
