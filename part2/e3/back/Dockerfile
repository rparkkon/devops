FROM node:10
# 
WORKDIR /usr/src/app
RUN git clone https://github.com/docker-hy/backend-example-docker
RUN cd $(pwd)/backend-example-docker && pwd && ls -a .

WORKDIR ./backend-example-docker 

RUN npm install
#RUN npm update caniuse-lite browserslist

#EXPOSE 8000
# excercise 1.11
#CMD npm start

# excercise 1.12
CMD FRONT_URL=http://localhost:5000/ npm start
