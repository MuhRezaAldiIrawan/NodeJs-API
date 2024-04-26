FROM node:18.12.1-alpine3.17.0

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "server.js" ]

