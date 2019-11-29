FROM  ubuntu:16.04

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    && apt-get install curl -y \
    && apt-get install git -y \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install -y nodejs \
    && git clone https://github.com/docker-hy/frontend-example-docker /usr/src/app \
    && apt-get purge --auto-remove git -y \
    && apt-get purge --auto-remove curl -y \
    && useradd -m appusr \
    && chown -hR appusr /usr/src/app 

USER appusr
RUN npm install && npm audit fix && npm update serve

CMD  npm start
