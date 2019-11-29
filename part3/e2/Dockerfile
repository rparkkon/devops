FROM ubuntu:16.04

ENV LC_ALL=C.UTF-8

ADD yle-dl-20191022.tar.gz /app

RUN apt-get update
RUN apt-get install -y curl python tree
#RUN apt-get install --user --upgrade yle-dl
#RUN curl -L https://yt-dl.org/downloads/latest/yle-dl -o /usr/local/bin/yle-dl
#RUN chmod a+x /usr/local/bin/yle-dl
WORKDIR /app
#COPY ./yle-dl-20191022 ./app/
RUN tree -lf ./yle-dl-20191022 

#WORKDIR ./ yle-dl-20191022
#ENTRYPOINT ["/usr/local/bin/yle-dl"]