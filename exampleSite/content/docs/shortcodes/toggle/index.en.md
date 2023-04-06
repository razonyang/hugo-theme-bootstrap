+++
# type = "docs"
title = "Toggle"
date = 2023-01-21T23:22:11+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Shortcode"]
tags = ["Toggle"]
series = ["Docs"]
images = []
+++

The `toggle` shortcode is similar to the `code-toggle`, but it's more generic.

<!--more-->

## Usage

```markdown
{{</* toggle myToggleName */>}}
  
  {{</* toggle-item myToggleItemName */>}}
    CONTENT HERE, MARKDOWN and SHORTCODE are support.
  {{</* /toggle-item */>}}

  ...

{{</* /toggle */>}}
```

- The `myToggleName` MUST be unique per page.
- The `myToggleItemName` MUST be unique per toggle.

## Example

{{< toggle foobar >}}

  {{< toggle-item Foo >}}
    Foo
  {{< /toggle-item >}}

  {{< toggle-item Bar >}}
    Bar
  {{< /toggle-item >}}

{{< /toggle >}}


{{< toggle languages >}}
  {{< toggle-item PHP >}}
    {{< highlight php >}}
    echo "hello world"
    {{< /highlight >}}
  {{< /toggle-item >}}

  {{< toggle-item JS >}}
    {{< highlight javascript >}}
    console.log("hello world")
    {{< /highlight >}}
  {{< /toggle-item >}}

  {{< toggle-item SQL >}}
    {{< highlight sql >}}
    SELECT "hello world"
    {{< /highlight >}}
  {{< /toggle-item >}}

{{< /toggle >}}
