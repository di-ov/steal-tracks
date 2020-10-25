FROM node:14.14.0-buster

WORKDIR /steal-tracks

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
