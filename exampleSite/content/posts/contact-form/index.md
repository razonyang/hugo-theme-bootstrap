+++
title = "Contact Form"
date = 2021-11-30T23:56:00+08:00
featured = false
comment = true
toc = true
reward = true
categories = [
  "Contact Form"
]
tags = [
  "Netlify",
  "Getform"
]
series = [
  "Docs"
]
images = []
[menu.footer]
  parent = "features"
  weight = 6
  pre = '<i class="fas fa-fw fa-question-circle"></i>'
+++

We can put our email address on [social links]({{< ref "/posts/widgets/social-links" >}}) so that readers can contact us. Unfortunately, emails will be more or less treated as spam and even filtered.
Therefore, we bring a feature called contact form. 

<!--more-->

## Prerequisites

We need to create a contact page called `contact/index.md` in the `content` directory, so that we can access the contact form.

```toml
+++
title = "Contact Us"
layout = "contact"
+++
```

Once created, the link will appear in the profile widget.

## Parameters

| Name | Type | Default | Description
|---|:-:|:-:|---
| `contact` | Object | - | 
| `contact.endpoint` | String | - | See also [Backends](#backends).
| `contact.file` | Boolean | `false` | Enable/Disable file upload.
| `contact.fileField` | String | - | The name of file field.

## Backends

It is designed to be compatible with most backends, such as [Netlify form](https://docs.netlify.com/forms/setup), [Getform](https://getform.io/) and [Formspree](https://formspree.io/).

### Netlify

[Netlify form](https://docs.netlify.com/forms/setup) are supported out of box, therefore, you don't need to specify the `contact.endpoint` parameter.

> The demo site uses Getform instead of Netlify form, because the Netlify will upgrade your form level automatically if you exceed the limit of current plan, which will lead to additional expenses.

> Please make sure the `contact.endpoint` parameter is empty if you intend to use Netlify form.

### Others

Let's take [Getform](https://getform.io) as an example:

```toml
[contact]
  endpoint = "YOUR_ENDPOINT"
```
