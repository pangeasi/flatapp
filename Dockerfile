FROM node:lts
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN mv /usr/src/app/api/config.example.ts /usr/src/app/api/config.ts
RUN chmod 777 wait-for-it.sh
RUN npm i
RUN npm run build:api
RUN npm run build:front