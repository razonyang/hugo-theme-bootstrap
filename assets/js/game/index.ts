import Component from "js/component";

export default class Game implements Component {
    constructor() {
    }

    run() {
        this.load();
        this.fullscreen();
    }

    load() {
        document.querySelectorAll('.btn-load-game').forEach((btn) => {
            btn.addEventListener('click', () => {
                const iframe = btn.parentElement.nextElementSibling;
                const btnFullscreen = btn.parentElement.querySelector('.btn-fullscreen-game');
                iframe.setAttribute('src', iframe.getAttribute('data-src'));
                iframe.removeAttribute('data-src');
                iframe.addEventListener('load', () => {
                    btnFullscreen.classList.remove('d-none');
                    iframe.classList.remove('bg-dark');
                });
                btn.classList.add('d-none');
            });
        });
    }

    fullscreen() {
        document.querySelectorAll('.btn-fullscreen-game').forEach((btn) => {
            btn.addEventListener('click', () => {
                const iframe = btn.parentElement.nextElementSibling;
                iframe.requestFullscreen();
            });
        });
    }
}
