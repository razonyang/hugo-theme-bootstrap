---
author: Hugo Authors
title: Math Typesetting
date: 2019-03-08
description: A brief guide to setup KaTeX
math: true
categories:
tags:
  - Math
---

Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.
<!--more-->

This theme supports [KaTeX](https://katex.org/).

- To enable KaTex globally set the parameter `math` to `true` in a project's configuration
- To enable KaTex on a per page basis include the parameter `math: true` in content files

**Note:** Use the online reference of [Supported TeX Functions](https://katex.org/docs/supported.html)

## Examples

### Inline

Such as \\(\KaTeX\\) and $\LaTeX$.

### Block

$$
  \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
$$

\\[
  \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
\\]

### Multiple lines

{{< katex >}}
  \begin{array}{l}
  E_{o 1}=\frac{1}{2}\left( { target }_{o 1}- { out }_{o 1}\right)^{2}=\frac{1}{2}(0.01-0.75136507)^{2}=0.274811083 \\
  E_{o 2}=0.023560026 \\
  E_{ {total }}=E_{o 1}+E_{o 2}=0.274811083+0.023560026=0.298371109
  \end{array}
{{< /katex >}}
