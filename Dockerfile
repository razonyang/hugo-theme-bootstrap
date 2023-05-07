# Build stage
FROM hugomods/hugo as builder

## Build site
COPY . /src
ARG HUGO_BASEURL=
ENV HUGO_BASEURL=${HUGO_BASEURL}
WORKDIR /src/exampleSite
RUN npm install
RUN npm install -g @fullhuman/postcss-purgecss rtlcss
RUN hugo version
RUN hugo -b ${HUGO_BASEURL}

# Final stage
FROM hugomods/hugo:nginx
COPY --from=builder /src/exampleSite/public /site
