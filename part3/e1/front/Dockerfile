FROM  node:10-slim

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    && apt-get install git -y \
    && git clone https://github.com/docker-hy/frontend-example-docker \
    && apt-get purge --auto-remove git -y 

WORKDIR ./frontend-example-docker 

RUN npm install && npm audit fix && npm update serve

CMD  npm start
