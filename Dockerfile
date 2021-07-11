# Specify a base image
#FROM node:alpine
FROM arm32v7/node

WORKDIR /usr/app

#copy files from local filesystem into container
COPY ./package.json ./

#install some dependencies
RUN npm install

COPY ./ ./

#default command
CMD ["npm", "start"]