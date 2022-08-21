+++
# type = "docs"
title = "Events"
date = 2022-07-23T17:33:59+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = [
    "Events"
]
tags = [
]
series = [
    "Docs"
]
images = []
+++

This articles listed some custom events emitted by the theme, you can catch those events via event listeners.

<!--more-->

## Color Mode Event

HBS will emit a custom event called `hbs:mode` on color mode changed, it's useful to adjust your widget's style to theme color mode.
The built-in Utterances and Giscus comments engines are relying on this event for adjusting their theme to light or dark.

{{% code/events-mode-catch %}}
