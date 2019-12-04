FROM node:10

WORKDIR /usr/src/app

COPY pack* ./
COPY src/* ./src/

#WORKDIR ./malli
RUN cd $(pwd) && pwd && ls -a . && ls -a ./src

#RUN yarn global add serve
EXPOSE 3000

RUN npm install

COPY public/* ./public/
RUN npm run build
RUN npm install -g serve
#RUN npm start

CMD ["serve", "-p", "3000", "./build"]
#CMD ["npm", "run", "start:server"]