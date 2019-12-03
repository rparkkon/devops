FROM  node:10-slim 

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    && apt-get install git -y \
    && git clone https://github.com/docker-hy/frontend-example-docker /usr/src/app \
    && apt-get purge --auto-remove git -y \
    && useradd -m appusr \ 
    && chown -hR appusr /usr/src/app 

USER appusr
RUN npm install && npm audit fix && npm update serve
CMD npm start

FROM node:10-slim
# 
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    && apt-get install git -y \
    && git clone https://github.com/docker-hy/backend-example-docker /usr/src/app \
    && apt-get purge --auto-remove git -y \
    && useradd -m appusr \
    && chown -hR appusr /usr/src/app /usr/local

USER appusr

RUN npm install
CMD npm start
