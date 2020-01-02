FROM  ubuntu:16.04 as build-stage
WORKDIR /usr/src/app 
COPY ./ ./

RUN  apt-get update && apt-get install -y &&  apt-get install curl -y \
  && curl -sL https://deb.nodesource.com/setup_10.x | bash \
  && apt install -y nodejs \
  && npm install \
  && npm run build

FROM  node:10-slim
WORKDIR /usr/src/app 
RUN useradd -m appusr && chown -hR appusr /usr/src/app  /usr/local
USER appusr

COPY --from=build-stage /usr/src/app/ ./
RUN npm install -g serve && npm update serve
EXPOSE 3000
CMD [ "serve", "-s", "./build", "-p", "3000"]