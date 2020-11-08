import Popover from './popover';

class LanguageSwitcher extends Popover {
  public key: string = 'hbs-lang';

  constructor(public element: HTMLElement) {
    super(element);
  }
}

export default LanguageSwitcher;
