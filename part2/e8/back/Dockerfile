FROM node:10
# 
WORKDIR /usr/src/app
RUN git clone https://github.com/docker-hy/backend-example-docker
RUN cd $(pwd)/backend-example-docker && pwd && ls -a .

WORKDIR ./backend-example-docker 

RUN npm install

#CMD FRONT_URL="*" npm start
CMD npm start
