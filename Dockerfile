FROM node:12-alpine

WORKDIR /home/api

COPY . .

CMD npm run start:docker:dev