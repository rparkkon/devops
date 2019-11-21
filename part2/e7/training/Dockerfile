FROM python:3.6.7-slim

WORKDIR /src
COPY ./ml-kurkkumopo-training /src/
RUN pwd && ls -la .

RUN python --version

RUN pip install --trusted-host pypi.python.org -r ./requirements.txt

CMD python -u ./train.py

