class Code {
    init() {
        document.querySelectorAll('pre > code').forEach(function (codeBlock: HTMLElement) {
            var button = document.createElement('a');
            button.className = 'btn-copy-code';
            button.innerHTML = '<i class="fas fa-copy"></i>';

            codeBlock.parentNode.insertBefore(button, codeBlock);

            button.addEventListener('click', function () {
                navigator.clipboard.writeText(codeBlock.innerText);
                button.innerHTML = '<i class="fas fa-check-circle"></i>';
                setTimeout(function () {
                    button.innerHTML = '<i class="fas fa-copy"></i>';
                }, 1000)
            });
        });
    }
}

export default Code;
