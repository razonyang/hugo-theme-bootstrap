class Form {
  private callback: (FormData) => void;

  private input: HTMLInputElement;

  private lang: HTMLSelectElement;

  constructor(
    public form: HTMLFormElement,
    callback: (data: FormData) => void
  ) {
    this.callback = callback;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submit();
    });

    this.input = form.querySelector('input[name="q"]');
    if (this.input.value === "") {
      // retrieve keywords from URL.
      this.input.value = new URLSearchParams(window.location.search).get("q");
    }

    this.lang = form.querySelector('select[name="lang"]');
    this.lang.addEventListener("change", () => {
      this.submit();
    });

    form.querySelector("#sorting-select").addEventListener("change", () => {
      this.submit();
    });
  }

  private submit() {
    this.callback(this.data());
  }

  data(): FormData {
    return new FormData(this.form);
  }
}

export default Form;
