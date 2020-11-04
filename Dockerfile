# Build stage
FROM ubuntu:latest as builder

# Install Hugo and Git
RUN apt-get update -y
RUN apt-get install -y hugo git

# Build site
WORKDIR /src
COPY . /src
RUN hugo version
COPY /src/docker/config /src/exampleSite/config/docker
RUN cd /src/exampleSite && hugo --themesDir=../../ --theme=src -e=docker

# Final stage
FROM nginx
COPY --from=builder /src/exampleSite/public /app
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
