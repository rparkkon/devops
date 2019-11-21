FROM  node:10

WORKDIR /usr/src/app

# RUN git --version && echo "Node" && node -v && echo "nmp: " && npm -v
RUN git clone https://github.com/docker-hy/frontend-example-docker
# RUN cd $(pwd)/frontend-example-docker && pwd && ls -a .

WORKDIR ./frontend-example-docker 

# ENV API_URL=http://localhost:5000 

RUN npm install
RUN npm audit fix
RUN npm update serve
#RUN npm update caniuse-lite browserslist

EXPOSE 5000
# excercise 1.10
#CMD npm start

# excercise 1.12
CMD API_URL=http://localhost:8000  npm start