FROM node:16-alpine as base

WORKDIR /home/node/app

COPY package*.json ./

COPY . .

FROM base as production

ENV NODE_PATH=./dist

RUN npm start