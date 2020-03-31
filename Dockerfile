
FROM alpine:latest as builder
ARG tag=v3.3.1
RUN apk --update --no-cache add \
  build-base \
  autoconf \
  automake \
  libtool \
  pkgconf \
  nasm \
  tar

WORKDIR /src/mozjpeg
ADD https://github.com/mozilla/mozjpeg/archive/$tag.tar.gz ./

RUN tar -xzf $tag.tar.gz
RUN rm $tag.tar.gz

RUN SRC_DIR=$(ls -t1 -d mozjpeg-* | head -n1) && \
  cd $SRC_DIR && \
  autoreconf -fiv && \
  cd .. && \
  sh $SRC_DIR/configure && \
  make install \
  prefix=/usr/local \
  libdir=/usr/local/lib64
  

#
# Node 12 alpine
#
FROM node:12-alpine as gypfixed-prod
COPY --from=builder /usr/local /usr/local
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python optipng zlib-dev
RUN npm i -g node-gyp typescript

#
# Building node_modules
#
FROM gypfixed-prod as node_modules-prod
WORKDIR /tmp/
COPY package.json ./
RUN npm install --production=true --non-interactive

#
# Building Next.js app
#
FROM gypfixed-prod as dist-prod
# WORKDIR /tmp/
WORKDIR /usr/local/api
COPY package.json ./
RUN npm install
COPY tsconfig.json next.config.js ./
# COPY ssr-server.ts ./
# RUN tsc --esModuleInterop true --skipLibCheck true ssr-server.ts
# COPY public/ ./public/
# COPY static/ ./static/
COPY pages/ ./pages/
COPY src/ ./src/
# COPY key/ ./key/
RUN npm run build

#
# Bundling pre-built Next.js app
#
FROM gypfixed-prod
WORKDIR /usr/local/api
COPY --from=node_modules-prod /tmp/node_modules ./node_modules
COPY --from=dist-prod /usr/local/api/.next ./.next
COPY --from=dist-prod /usr/local/api/package.json ./
# COPY --from=dist-prod /usr/local/api/package-lock.json ./
COPY --from=dist-prod /usr/local/api/next.config.js ./
# COPY --from=dist-prod /tmp/ssr-server.js ./
# COPY --from=dist-prod /usr/local/api/static/ ./static/
# COPY --from=dist-prod /tmp/key/ ./key/

# ENV PORT 8080
# EXPOSE $PORT
# ENV NODE_ENV production
# ENV API_ENDPOINT 'https://api.unicorncoach.io/graphql'
CMD ["npm", "start", "--", "-p", "${PORT}"]