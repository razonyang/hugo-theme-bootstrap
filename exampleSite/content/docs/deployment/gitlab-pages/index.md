+++
# type = "docs"
title = "Deploy to GitLab Pages"
linkTitle = "GitLab Pages"
date = 2022-08-27T10:30:23+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Deployment"]
tags = ["GitLab Pages", "GitLab CI"]
series = ["Docs"]
images = []
authors = ["Rubonnek"]
+++

This article explains how to deploy sites to [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) using GitLab CI.

<!--more-->

## Workflow

Create `.gitlab-ci.yml` at the root of your site with the following contents:

```yaml
{{% code/deployment-gitlab-pages-ci %}}
```

The example above will only deploy the default branch to GitLab Pages and run a test on the rest of the branches.

> See also:
> * [Starter Template GitLab Pages Configuration](https://github.com/razonyang/hugo-theme-bootstrap-skeleton/blob/main/.gitlab-ci.yml)。
> * [Upstream GitLab Hugo Example](https://gitlab.com/pages/hugo)
> * [GitLab CI/CD Variables Documentation](https://docs.gitlab.com/ee/ci/variables/)
