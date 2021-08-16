FROM node:12.2.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3001
CMD ["npm", "start"]