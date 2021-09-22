class SocialShare {
  private btn: HTMLElement;

  private buttons: HTMLElement;

  constructor() {
    this.btn = document.querySelector('.btn-social-share');
    this.buttons = document.querySelector('.social-share-buttons');
  }

  togglerButtons() {
    if (this.buttons.classList.contains('visually-hidden')) {
      this.buttons.classList.remove('visually-hidden');
    } else {
      this.buttons.classList.add('visually-hidden');
    }
  }

  run() {
    const self = this;
    this.btn.addEventListener('click', () => {
      self.togglerButtons();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  (new SocialShare()).run();
});
