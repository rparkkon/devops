FROM  node:10

WORKDIR /usr/src/app

RUN git clone https://github.com/docker-hy/ml-kurkkumopo-frontend

WORKDIR ./ml-kurkkumopo-frontend 

RUN npm install
RUN npm audit fix
RUN npm update serve

EXPOSE 3000

CMD API_URL=http://localhost:3000  npm start