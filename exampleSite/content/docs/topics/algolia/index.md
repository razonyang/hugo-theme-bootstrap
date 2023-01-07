+++
# type = "docs"
title = "Algolia"
linkTitle = "Algolia"
date = 2022-11-27T19:53:12+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = true
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = []
tags = ["Algolia"]
series = ["Docs"]
images = []
+++

The client search will become slower and slower with the content grows, it's reasonable to have a remote search service to handle search requests from a large site.

Algolia is a popular search service that provides free plan (10k records, 10k requests per month). After reading this article, you will learn how to configure Algolia and automatically upload index files.

<!--more-->

## Preparations

Firstly, you need to create an Algolia account, and then create your application.

Navigate to the **Overview** > **API Keys**, the page shows anything you may need in the rest steps, such as application ID, search API key and the admin API key.

## Configuration

| Name | Type | Default | Description |
|---|:-:|:-:|--|
| `algolia` | Object | - | [Algolia](https://www.algolia.com/) 
| `algolia.appId` | String | - | App ID
| `algolia.apiKey` | String | - | Search only API key
| `algolia.indexName` | String | - | Index name
| `algolia.paginate` | Number | `5` |
| `algolia.stallThreshold` | Number | `300` | How many milliseconds must elapse before considering the autocomplete experience stalled.

## Index

### Create Index

Navigate to the **Data sources** > **Indices** > **Create Index**, and then create your index, let's name it `prod`.

### Add Searchable Attributes

Once the index was created, we're in the index page.

Navigate to the **Configuration** > **Searchable attributes**, we'll need add the `title` and `content` attributes.

### Upload Index

After site built, the Algolia index file will be generated and saved as `/algolia/index.json`, i.e. `http://localhost:1313/algolia/index.json`.

#### Upload Manually

You can upload the index file manually via the Algolia dashboard for testing.

#### CLI Tool

I wrote a [CLI tool](https://github.com/razonyang/hugo-theme-bootstrap-algolia) for uploading the index file, it can be integrated with your CI & CD tools easilly.

#### GitHub Action

I also wrote a [GitHub actions](https://github.com/razonyang/hugo-theme-bootstrap-algolia-action) if you're using GitHub to host your repository.

Create the `.github/workflows/algolia.yml` under your site root with the following content. 

```yaml
name: Algolia Index

on:
  workflow_dispatch:
  push:
    branches:
      - "main"

jobs:
  index:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Build & upload Algolia index
        uses: razonyang/hugo-theme-bootstrap-algolia-action@v0.1.0
        with:
          algolia-app-id: ${{ secrets.ALGOLIA_APP_ID }}
          algolia-api-key: ${{ secrets.ALGOLIA_API_KEY }}
          algolia-index-name: prod
```

And then create the `ALGOLIA_APP_ID` and `ALGOLIA_API_KEY` secrets for your repository.

> `ALGOLIA_API_KEY` is the **admin** API key, **not** search only API key.

Once the GitHub action was created, the index file will be uploaded automatically on `git push`.
