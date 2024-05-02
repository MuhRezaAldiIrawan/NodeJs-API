FROM node:20

WORKDIR /usr/app/master-data

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 9000

CMD [ "npm", "start" ]

