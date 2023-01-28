###############
# Build Stage #
###############
FROM razonyang/hugo as builder

WORKDIR /src
COPY . /src

ARG HUGO_ENV=production
ENV HUGO_ENV=${HUGO_ENV}

# Base URL
ARG HUGO_BASEURL=/
ENV HUGO_BASEURL=${HUGO_BASEURL}

# Module Proxy
ARG HUGO_MODULE_PROXY=
ENV HUGO_MODULE_PROXY=${HUGO_MODULE_PROXY}

# NPM mirrors, such as https://registry.npmmirror.com
ARG NPM_CONFIG_REGISTRY=
ENV NPM_CONFIG_REGISTRY=${NPM_CONFIG_REGISTRY}

# Install dependencies
RUN npm install
RUN npm install -g @fullhuman/postcss-purgecss rtlcss

# Build site
RUN hugo --minify --gc --enableGitInfo

# Set the fallback 404 page if defaultContentLanguageInSubdir is enabled, please replace the `en` with your default language code.
# RUN cp ./public/en/404.html ./public/404.html

###############
# Final Stage #
###############
FROM nginx
COPY --from=builder /src/public /app
COPY deploy/nginx/default.conf /etc/nginx/conf.d/default.conf
