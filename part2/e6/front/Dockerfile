FROM  node:10

WORKDIR /usr/src/app

RUN git clone https://github.com/docker-hy/frontend-example-docker

WORKDIR ./frontend-example-docker 

RUN npm install
RUN npm audit fix
RUN npm update serve

EXPOSE 5000

CMD API_URL=http://localhost:8000  npm start