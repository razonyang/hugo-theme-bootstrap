+++
title = "Diagram Guide"
description = "Guide to diagram usage in Markdown"
date = 2021-09-01T11:36:50+08:00
featured = false
draft = false
comment = true
toc = true
reward = true
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

## Usage

### Via Shortcode

```markdown
{{</* mermaid */>}}
YOUR DIAGRAM INSTRUCTIONS
{{</* /mermaid */>}}
```

You can also wrap the shortcode with other shortcodes, such as `text/align-center`.

```markdown
{{%/* text/align-center */%}}
{{</* mermaid */>}}
YOUR DIAGRAM INSTRUCTIONS
{{</* /mermaid */>}}
{{%/* /text/align-center */%}}
```

### Mermaid code block

````markdown
```mermaid
YOUR DIAGRAM INSTRUCTIONS
```
````

## Examples

### Flow Chart

```markdown
{{</* mermaid */>}}
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fas:fa-car Car]
{{</* /mermaid */>}}
```

{{% text/align-center %}}
{{< mermaid >}}
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fas:fa-car Car]
{{< /mermaid >}}
{{% /text/align-center %}}

We need to [import the `faCar` solid icon]({{< ref "docs/look-and-feel#icons" >}}) first, in order to use the `fas:fa-car` FontAwesome icon.

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

````markdown
```mermaid
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
```
````

```mermaid
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
```
