FROM node:10-slim
# 
WORKDIR /data

RUN adduser --disabled-password --gecos "" appusr \
    && chown -hR appusr /data /usr/local
USER appusr

RUN npm install && npm install -g json-server && npm install express
CMD  ["json-server", "-H", "0.0.0.0", "./db.json", "--port", "3001", "-r", "./routes.json"] 
