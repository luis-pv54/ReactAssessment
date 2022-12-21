FROM node:16-alpine
USER root

WORKDIR /app

COPY src ./
COPY package.json ./
COPY package-lock.json ./
COPY boot.sh ./

RUN npm install
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

EXPOSE 3000
