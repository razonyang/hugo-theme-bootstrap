class Languages {
    ele: HTMLSelectElement;
    
    constructor(callback) {
        this.ele = document.querySelector('#languages-select');
        this.ele.addEventListener('change', () => {
            callback();
        });
    }

    getValue() {
        return this.ele.value;
    }
}

export default Languages;
