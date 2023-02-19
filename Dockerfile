FROM node:10.15-alpine

WORKDIR /ogdllc-server

COPY . /ogdllc-server/

RUN apk add --no-cache --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-pre-gyp -g &&\
  npm install --quiet --unsafe-perm && \
  apk del native-deps

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

EXPOSE 3000
