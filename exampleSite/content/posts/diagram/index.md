+++
title = "Diagram Guide"
description = "Guide to diagram usage in Markdown"
date = 2021-09-01T11:36:50+08:00
featured = false
draft = false
comment = true
toc = true
reward = true
diagram = true
categories = [
  "Markdown"
]
tags = [
  "Diagram"
]
series = [
  "Docs"
]
authors = ["RazonYang"]
+++

This article offers a sample of basic diagram usage that can be used in Hugo content files.

Please see also [Mermaid](https://mermaid-js.github.io).

<!--more-->

## Prerequisites

The diagram is disabled by default, you'll need to enable the `diagram` in front matter, otherwise the diagram won't be rendered.

{{< code-toggle >}}
diagram = true
{{< /code-toggle >}}

## Usage

```markdown
{{</* mermaid */>}}
YOUR DIAGRAM INSTRUCTIONS
{{</* /mermaid */>}}
```

You can also wrap it with other shortcodes, such as `text/align-center`.

```markdown
{{%/* text/align-center */%}}
{{</* mermaid */>}}
YOUR DIAGRAM INSTRUCTIONS
{{</* /mermaid */>}}
{{%/* /text/align-center */%}}
```

## Examples

### Flow Chart

```markdown
{{</* mermaid */>}}
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
{{</* /mermaid */>}}
```

{{% text/align-center %}}
{{< mermaid >}}
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
{{< /mermaid >}}
{{% /text/align-center %}}

### Sequence Diagram

```markdown
{{</* mermaid */>}}
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
{{</* /mermaid */>}}
```

{{% text/align-center %}}
{{< mermaid >}}
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
{{< /mermaid >}}
{{% /text/align-center %}}

### Class Diagram

```markdown
{{</* mermaid */>}}
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }
{{</* /mermaid */>}}
```

{{% text/align-center %}}
{{< mermaid >}}
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }
{{< /mermaid >}}
{{% /text/align-center %}}
