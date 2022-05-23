FROM node:16

WORKDIR /home/geta/development/node.js
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 8000
CMD [ "node", "app.js" ]
