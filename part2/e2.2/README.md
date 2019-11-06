<BR>Exercise 2.2
<BR>============
<BR>
<BR>$ docker pull devopsdockeruh/ports_exercise
<BR>$ docker-compose up -d
<BR>$ docker container ps
<BR>CONTAINER ID        IMAGE                           COMMAND             CREATED             STATUS              PORTS                    NAMES
<BR>2d7d40dec5ae        devopsdockeruh/ports_exercise   "npm start"         31 minutes ago      Up 31 minutes       0.0.0.0:8084->80/tcp     e22_ports_exercise_1
<BR>$ curl localhost:8084
<BR>Ports configured correctly!!
