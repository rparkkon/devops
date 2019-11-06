$ docker build -t me/belle .
<BR>$ docker run -it -d  me/belle
<BR>fc11420ae745996e39108d5faa86f003801fde8ec017ff250207a9417d93852a
<BR>
<BR>$ docker container ps --last 1 --no-trunc
<BR>CONTAINER ID                                                       IMAGE               COMMAND                                                      CREATED             <BR>STATUS              PORTS               NAMES
<BR>fc11420ae745996e39108d5faa86f003801fde8ec017ff250207a9417d93852a   me/belle            "/bin/sh -c 'java -jar ./target/docker-example-1.1.3.jar'"   15 minutes ago      Up 15 minutes                           quizzical_kepler
<BR>
<BR>=> browser: http://172.17.0.4:8080/ => "Press here" => Success
<BR>