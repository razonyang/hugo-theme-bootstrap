---
author: Hugo Authors
title: Math Typesetting
date: 2019-03-08
description: A brief guide to setup KaTeX
categories:
tags:
  - Math
authors:
  - Hugo
---

Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.
<!--more-->

This theme supports [KaTeX](https://katex.org/).

- When using a `math` [code block](#math-code-block) or `katex` shortcode, KaTeX is activated automatically.
- To manually enable KaTeX globally set the parameter `math` to `true` in a project's configuration file.
- To enable KaTeX on a per page basis include the parameter `math: true` in the frontmatter of the content files.

**Note:** Use the online reference of [Supported TeX Functions](https://katex.org/docs/supported.html)

## Examples

### Inline

Such as `\\(\KaTeX\\)`(\\(\KaTeX\\)) and `$\LaTeX$`($\LaTeX$).

### Block

```markdown
$$
FORMULA
$$
```

$$
  \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
$$

\\[
  \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
\\]

### Math code block(recommended)

See [GitLab Flavored Markdown](https://docs.gitlab.com/ee/user/markdown.html#math).

````markdown
```math
FORMULA
```
````

The probability of getting \\(k\\) heads when flipping \\(n\\) coins is:

```math
\tag*{(1)} P(E) = {n \choose k} p^k (1-p)^{n-k}
```

### Multiple lines via shortcode(recommended)

```markdown
{{</* katex */>}}
FORMULA
{{</* /katex */>}}
```

{{< katex >}}
  \begin{array}{l}
  E_{o 1}=\frac{1}{2}\left( { target }_{o 1}- { out }_{o 1}\right)^{2}=\frac{1}{2}(0.01-0.75136507)^{2}=0.274811083 \\
  E_{o 2}=0.023560026 \\
  E_{ {total }}=E_{o 1}+E_{o 2}=0.274811083+0.023560026=0.298371109
  \end{array}
{{< /katex >}}
