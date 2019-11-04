FROM openjdk:8

WORKDIR /usr/src/app

RUN git clone https://github.com/docker-hy/spring-example-project
#RUN cd $(pwd)/spring-example-project && pwd && ls -a .

WORKDIR ./spring-example-project 
RUN ./mvnw package

CMD java -jar ./target/docker-example-1.1.3.jar
