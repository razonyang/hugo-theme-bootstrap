class ImageLoader {
    run() {
        const images = document.querySelectorAll('img[data-src]');
        if('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((items, observer) => {
                items.forEach((item) => {
                    if(item.isIntersecting) {
                        this.load(item.target);
                        observer.unobserve(item.target);
                    }
                });
            });
            images.forEach((img) => {
                observer.observe(img);
            });
        } else {
            images.forEach((img) => {
                this.load(img);
            });
        }
    }

    load(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = () => {
            img.removeAttribute('data-src');
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    (new ImageLoader()).run();
});
