FROM node:alpine

COPY ./ /app
WORKDIR /app
RUN yarn && yarn build

ENTRYPOINT [ "node", "src/Server.js" ]