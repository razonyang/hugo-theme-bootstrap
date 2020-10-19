# Build stage
FROM centos:latest as builder

# Install Hugo
RUN curl -o /etc/yum.repos.d/hugo.repo https://copr.fedorainfracloud.org/coprs/daftaupe/hugo/repo/epel-8/daftaupe-hugo-epel-8.repo
RUN dnf update -y
RUN dnf install -y hugo git

# Build site
WORKDIR /src
COPY . /src
RUN git submodule update --init --recursive && cd /src/exampleSite && hugo --themesDir=../../ --theme=src -e=demo

# Final stage
FROM nginx
COPY --from=builder /src/exampleSite/public /app
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
