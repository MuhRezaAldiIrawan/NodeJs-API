FROM node:20

WORKDIR /usr/app/master-data

COPY package*.json .

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 9000

CMD [ "nodemon", "index.js" ]

