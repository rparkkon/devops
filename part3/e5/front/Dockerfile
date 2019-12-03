FROM  node:10-slim as build-stage

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

FROM  nginx
COPY --from=build-stage /usr/app/_site/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
