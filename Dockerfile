FROM node:18-alpine as build-stage

RUN npm install -g npm@latest
RUN npm update -g
RUN npm install -g nodemon

COPY . /src/services/gateway
WORKDIR /src/services/gateway
RUN yarn install
RUN yarn run build

EXPOSE 8080

ENTRYPOINT ["nodemon", "/src/services/gateway/build/main/app.js"]
