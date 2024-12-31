# contain steps needed to run the application

FROM node:20-alpine

# Docker Image, Isolated environment like a empty folder you can install inside

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD ["npm", "run", "start"]



