FROM  ubuntu:16.04 as build-stage
WORKDIR /usr/src/app 
RUN  apt-get update && apt-get install -y &&  apt-get install git curl -y \
  && git clone https://github.com/docker-hy/frontend-example-docker /usr/src/app \
  && curl -sL https://deb.nodesource.com/setup_10.x | bash \
  && apt install -y nodejs \
  && npm install \
  && npm run build

FROM  node:10-slim
WORKDIR /usr/src/app 
COPY --from=build-stage /usr/src/app/dist ./dist
RUN npm install -g serve && npm update serve
EXPOSE 5000
CMD ["serve", "-p", "5000", "./dist"]
