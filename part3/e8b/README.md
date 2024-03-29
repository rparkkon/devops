# Exercise 3.8 b


Project [source files tree](https://github.com/rparkkon/devops/blob/master/part3/e8b/sourcefiles.txt).

To build containers: [Docker-compose](https://github.com/rparkkon/devops/blob/master/part3/e8b/docker-compose.yml) makes [docker images](https://github.com/rparkkon/devops/blob/master/part3/e8b/images.txt) frontend - _UI_, backend - _REST API json-server database_ and nginx.

The application **Puhelinluettelo** by default runs in localhost.
<BR> ![localhost](https://github.com/rparkkon/devops/blob/master/part3/e8b/ex38b.png).

To docker hub commands:
<BR>tags:
<BR>`docker tag frontend:latest docvuosaari/ex38bfont:1` 
<BR>`docker tag backend:latest docvuosaari/ex38bback:1`
<BR>`docker tag nginx:latest docvuosaari/ex38bnginx:1`
<BR>push:
<BR>`docker push docvuosaari/ex38bfont`
<BR>`docker push docvuosaari/ex38bback`
<BR>`docker push docvuosaari/ex38bnginx`


### To run in own environment

From docker hub: [docker-compose.fromhub.yml](https://github.com/rparkkon/devops/blob/master/part3/e8b/docker-compose.fromhub.yml).

Prepare the environmet by cloning the database files from [**data**](https://github.com/rparkkon/devops/blob/master/part3/e8b/data) folder in your project root.
<BR>To start containers: `docker-compose --file docker-compose.fromhub.yml up [-d]` 
<BR>To stop : `ctrl-c` in shell when no -d option or `docker-compose --file docker-compose.fromhub.yml stop` 

Known issue. The button **Poista** does not work properly. The correction is beyond this exercise.