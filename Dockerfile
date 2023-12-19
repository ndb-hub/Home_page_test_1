# Stage 1: Build react app
FROM node:12 as build

WORKDIR /app

COPY package.json ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build
