#
## Build Stage
FROM node:16-alpine as BUILD_STAGE
ENV SOURCE_DIR=/app
ENV INLINE_RUNTIME_CHUNK=false
ENV SCARF_ANALYTICS=false

WORKDIR ${SOURCE_DIR}

COPY ./*.json  ./
RUN npm ci --include=dev

COPY ./public ./public
COPY ./src ./src

RUN npm run build

#
## Release Stage
FROM alpine:edge
ENV DIST_DIR=/app/build
ENV TZ Asia/Taipei

RUN apk update && apk --no-cache upgrade musl && apk --no-cache add curl caddy tzdata 

WORKDIR /app
COPY --from=BUILD_STAGE ${DIST_DIR} ./

EXPOSE 3000

CMD ["sh", "-c", "caddy file-server --listen :3000"]
