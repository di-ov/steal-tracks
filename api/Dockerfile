FROM node:14.14.0-buster

RUN wget https://youtube-dl.org/downloads/latest/youtube-dl && \
    chmod +x youtube-dl && \ 
    mv youtube-dl /usr/bin

RUN apt install ffmpeg

WORKDIR /steal-tracks

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
