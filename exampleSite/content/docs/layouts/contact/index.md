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
aliases = [
  "/en/posts/contact-form",
  "/en/docs/contact-form",
  "/en/docs/layouts/contact-form"
]
authors = ["RazonYang"]
# [menu.footer]
#   parent = "features"
#   weight = 6
#   [menu.footer.params]
#     icon = '<i class="fas fa-fw fa-question-circle"></i>'
+++

We can put our email address on [social links]({{< ref "/docs/widgets/social-links" >}}) so that readers can contact us. Unfortunately, emails will be more or less treated as spam and even filtered.
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
| `contact.reCaptcha` | Object | - | [Google reCAPTCHA](https://www.google.com/recaptcha/)
| `contact.reCaptcha.siteKey` | String | - |

## Backends

It is designed to be compatible with most backends, such as [Netlify form](https://docs.netlify.com/forms/setup), [Getform](https://getform.io/), [Formspree](https://formspree.io/) and [Fabform.io](https://fabform.io/). Also works with self-hosted alternative [Formailer](https://github.com/djatwood/formailer).

### Netlify

[Netlify form](https://docs.netlify.com/forms/setup) are supported out of box, you MUST not to specify the `contact.endpoint` parameter.

Please configure the `SITE_RECAPTCHA_KEY` and `SITE_RECAPTCHA_SECRET` environment variables if reCAPTCHA 2 is enabled, see also [Custom reCAPTCHA 2](https://docs.netlify.com/forms/spam-filters/#custom-recaptcha-2).

> The demo site uses Getform instead of Netlify form, because the Netlify will upgrade your form level automatically if you exceed the limit of current plan, which will lead to additional expenses.

> Please make sure the `contact.endpoint` parameter is empty if you intend to use Netlify form.

### Formailer

[Formailer](https://github.com/djatwood/formailer) is supported with a [contact form hook]({{< ref "/docs/advanced/hooks" >}}) to inject a missing input to the form.

> See also [Google Cloud Functions example](https://github.com/djatwood/formailer/tree/main/examples/gcf) upstream.

### Others

Let's take [Getform](https://getform.io) as an example:

```toml
[contact]
  endpoint = "YOUR_ENDPOINT"
```

## reCAPTCHA

In addition to set the `contact.reCaptcha.siteKey` parameter, you need to perform additional steps according to the backend:

- [Netlify](https://docs.netlify.com/forms/spam-filters/#custom-recaptcha-2)
- [GetForm](https://docs.getform.io/features/spam-filtering/recaptcha-v2/#step-4-setup-secret-key)
