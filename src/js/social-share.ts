class SocialShare {
  private btn: HTMLElement;
  private buttons: HTMLElement;

  constructor() {
    const self = this
    this.btn = document.querySelector('.btn-social-share');
    this.btn.addEventListener('click', function () {
      self.togglerButtons();
    });

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

  }
}

document.addEventListener('DOMContentLoaded', () => {
  (new SocialShare()).run();
});
