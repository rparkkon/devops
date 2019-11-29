FROM  node:10-slim

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    && apt-get install git -y \
    && git clone https://github.com/docker-hy/frontend-example-docker  /usr/src/app \
    && apt-get purge --auto-remove git -y 

RUN npm install && npm audit fix && npm update serve

CMD  npm start
