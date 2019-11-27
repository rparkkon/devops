FROM  ubuntu:16.04

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    && apt-get install curl -y \
    && apt-get install git -y \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && git clone https://github.com/docker-hy/backend-example-docker \
    && apt-get install -y nodejs &&  npm install npm -g \
    && apt-get purge --auto-remove git -y \
    && apt-get purge --auto-remove curl -y

WORKDIR ./backend-example-docker 

CMD  npm start
