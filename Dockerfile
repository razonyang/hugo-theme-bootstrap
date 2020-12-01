# Build stage
FROM klakegg/hugo:ubuntu as builder

RUN apt-get update -y

RUN apt-get install -y git

# Build site
WORKDIR /src
COPY . /src
RUN hugo version
RUN cd /src/exampleSite && hugo --themesDir=../../ --theme=src -b https://hugo-theme-bootstrap.razonyang.com/

# Final stage
FROM nginx
COPY --from=builder /src/exampleSite/public /app
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
