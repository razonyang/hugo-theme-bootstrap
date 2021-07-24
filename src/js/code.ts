import CodeBlock from "./code-block";

class Code {
    run() {
        document.querySelectorAll('.highlight').forEach(function(element: HTMLElement) {
            const block = new CodeBlock(element);
            block.run();
        });
    }
}

export default Code;
