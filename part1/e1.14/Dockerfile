FROM ruby:latest

WORKDIR /usr/src/app

RUN git clone https://github.com/docker-hy/rails-example-project
RUN cd $(pwd)/rails-example-project && pwd && ls -a .

WORKDIR ./rails-example-project 
# RUN ./mvnw package

# CMD java -jar ./target/docker-example-1.1.3.jar