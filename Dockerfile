# Build stage
FROM klakegg/hugo:ubuntu as builder

RUN apt-get update -y

RUN curl -fsSL https://deb.nodesource.com/setup_17.x | -E bash -
RUN apt-get install -y git nodejs

# Build site
WORKDIR /src
COPY . /src
ARG HUGO_BASEURL=/
ENV HUGO_BASEURL=${HUGO_BASEURL}
RUN cd /src/exampleSite && npm install && hugo version && hugo --themesDir=../../ --theme=src -b ${HUGO_BASEURL}

# Final stage
FROM nginx
COPY --from=builder /src/exampleSite/public /app
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
