// See also https://katex.org/docs/autorender.html and https://katex.org/docs/options.html.
const options = {
  delimiters: [
    {
      display: true,
      left: "$$",
      right: "$$",
    },
    {
      display: false,
      left: "$",
      right: "$",
    },
    {
      display: false,
      left: "\\(",
      right: "\\)",
    },
    {
      display: true,
      left: "\\begin{equation}",
      right: "\\end{equation}",
    },
    {
      display: true,
      left: "\\begin{align}",
      right: "\\end{align}",
    },
    {
      display: true,
      left: "\\begin{alignat}",
      right: "\\end{alignat}",
    },
    {
      display: true,
      left: "\\begin{gather}",
      right: "\\end{gather}",
    },
    {
      display: true,
      left: "\\begin{CD}",
      right: "\\end{CD}",
    },
    {
      display: true,
      left: "\\[",
      right: "\\]",
    },
  ],
};
export default options;
