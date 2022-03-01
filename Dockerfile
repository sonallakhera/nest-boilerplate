# Base image
FROM node:12.18.2-alpine3.9

WORKDIR /home/ubuntu/nest-boilerplate

COPY package.json .
RUN apk add --no-cache git
RUN npm install

#installing pm2
RUN npm install -g pm2

EXPOSE 3000
 
# Starting the pm2 process
CMD pm2-runtime start /home/ubuntu/nest-boilerplate/ecosystem.config.js --env development