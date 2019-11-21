FROM  python:3.6.7-slim 

# 
WORKDIR /app
COPY ./ml-kurkkumopo-backend /app/
RUN pwd && ls -la .

RUN python --version
RUN pip install --trusted-host pypi.python.org -r ./requirements.txt

EXPOSE 5000

CMD python -u ./app.py



