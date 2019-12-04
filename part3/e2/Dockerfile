FROM ubuntu:16.04

ENV LC_ALL=C.UTF-8

RUN apt-get update  && apt-get install -y python3 python3-pip ffmpeg wget 

WORKDIR /out
RUN pip3 install --user --upgrade setuptools youtube_dl yle-dl
ENTRYPOINT ["/root/.local/bin/yle-dl"]
