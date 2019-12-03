FROM node:alpine

ENV USER=docker

WORKDIR /usr/src/app
COPY ./ ./

RUN adduser -D -h "$(pwd)" -H -g ""  "$USER" && chown -hR "$USER" /usr/src/app /usr/local
USER "$USER"

EXPOSE 3000
RUN npm install && npm run build && npm install -g serve

CMD ["serve", "-p", "3000", "./build"]
