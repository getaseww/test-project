FROM node:16

WORKDIR /home/geta/Development/Nodejs/test-project

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]
