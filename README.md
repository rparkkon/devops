DevOps course / R.Parkkonen

[Part 1](https://github.com/rparkkon/devops/tree/master/part1)
<BR>
<BR>Excercise 1.1
<BR>=============
<BR> $ docker container ps -a
<BR>
|CONTAINER ID    |    IMAGE          |          COMMAND       |      CREATED       |    STATUS         | PORTS  |    NAME        |
<BR>|73a1db0c720a    |    ubuntu          |  "sh -c 'while true;d…" |  About a minute ago |  Up About a minute          |            |      cooper    |
<BR>|294f92a2b703    |    hello-world     |  "/hello"               |  5 hours ago        |  Exited (0) 5 hours ago     |            |      adoring_tharp   |
<BR>|5d73d89c2f3d    |    ubuntu          |  "/bin/bash"            |  5 hours ago        |  Exited (0) 5 hours ago     |            |      upbeat_herschel |
<BR>  
<BR>Excercise 1.2
<BR>=============
<BR> $ docker container stop cooper
<BR> $ docker container rm upbeat_herschel adoring_tharp cooper
<BR> $ docker rmi 9adf48c5ef5e
<BR> $ docker image ls
<BR>CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
<BR>
<BR>Excercise 1.3
<BR>=============
<BR>$ docker pull devopsdockeruh/pull_exercise 
<BR>
<BR>Secret message: 
<BR>basics
<BR>Message:
<BR>You found the correct password. Secret message is:
<BR>"This is the secret message"
<BR>
<BR>Excercise 1.4
<BR>=============
<BR>$ docker pull devopsdockeruh/exec_bash_exercise 
<BR>$ docker exec -it focused_kalam bash
<BR>root@9a26182f050c:/usr/app# tail -f ./logs.txt
<BR>Tue, 22 Oct 2019 11:34:38 GMT
<BR>Tue, 22 Oct 2019 11:34:41 GMT
<BR>Secret message is:
<BR>"Docker is easy"
<BR>Tue, 22 Oct 2019 11:34:47 GMT
<BR>Tue, 22 Oct 2019 11:34:50 GMT
<BR>Tue, 22 Oct 2019 11:34:53 GMT
<BR>Tue, 22 Oct 2019 11:34:56 GMT
<BR>Secret message is:
<BR>"Docker is easy"
<BR>
<BR>Excercise 1.5
<BR>=============
<BR>$ docker run -d  --name uupper ubuntu sh -c -it 'apt-get update;apt-get install -y curl; echo "Input website:"; read website; echo "Searching...."; sleep 1; <BR>curl http://$website;'
<BR>docker attach  uupper
<BR>
<BR>
[Excercise 1.6](https://github.com/rparkkon/devops/blob/master/part1/e1.6)
<BR>
[Excercise 1.7](https://github.com/rparkkon/devops/blob/master/part1/e1.7)
<BR>
<BR>Excercise 1.8 
<BR>===============
<BR>$ docker run -v $(pwd)/logs.txt:/usr/app/logs.txt devopsdockeruh/first_volume_exercise
<BR>(node:1) ExperimentalWarning: The fs.promises API is experimental
<BR>Wrote to file /usr/app/logs.txt
<BR>Wrote to file /usr/app/logs.txt
<BR>^CClosing file
<BR>cat logs.txt
Tue, 19 Nov 2019 07:39:37 GMT
Tue, 19 Nov 2019 07:39:40 GMT
Tue, 19 Nov 2019 07:39:43 GMT
<BR>
<BR>Excercise 1.9
<BR>===============
<BR>$ docker pull devopsdockeruh/ports_exercise
<BR>$ docker images
<BR>REPOSITORY                              TAG                 IMAGE ID            CREATED             SIZE
<BR>devopsdockeruh/ports_exercise           latest              a9eb96cbe9d0        8 months ago        73.1MB
<BR>
<BR>$ docker run -d -p 80 a9eb96cbe9d0
<BR>$ docker container ls -a --last 10
<BR>CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS                          PORTS                   NAMES
<BR>b0a5ee9827e3        a9eb96cbe9d0        "npm start"              5 seconds ago        Up 4 seconds                    0.0.0.0:32771->80/tcp   brave_chebyshev
<BR>
<BR>=> in browser: http://localhost:32771/  -> Ports configured correctly!!
<BR>
<BR>
[Excercise 1.10, 12](https://github.com/rparkkon/devops/blob/master/part1/e1.10)
<BR>
[Excercise 1.11, 12](https://github.com/rparkkon/devops/blob/master/part1/e1.11)
<BR>
[Excercise 1.13](https://github.com/rparkkon/devops/blob/master/part1/e1.13)
<BR>
[Excercise 1.14 - Not finished.](https://github.com/rparkkon/devops/blob/master/part1/e1.14)
<BR>
[Excercise 1.15](https://github.com/rparkkon/devops/blob/master/part1/e1.15)
<BR>
<BR>
<BR>Excercise 1.16
<BR>==============
<BR>Commands:
<BR>$ docker pull devopsdockeruh/heroku-example
<BR>$ heroku login
<BR>$ docker ps
<BR>$ heroku container:login
<BR>$ docker tag devopsdockeruh/heroku-example registry.heroku.com/lantti-matti/web
<BR>$ docker push registry.heroku.com/lantti-matti/web
<BR>
<BR>URL:  https://lantti-matti.herokuapp.com/
<BR>
<BR>Excercise 1.17 -
<BR>================
<BR>
<BR>
[Part 2](https://github.com/rparkkon/devops/tree/master/part2)
<BR>
<BR>
[Excercise 2.1](https://github.com/rparkkon/devops/blob/master/part2/e1)
<BR>
[Excercise 2.2](https://github.com/rparkkon/devops/blob/master/part2/e2)
<BR>
[Excercise 2.3](https://github.com/rparkkon/devops/blob/master/part2/e3)
<BR>
<BR>Excercise 2.4
<BR>================
<BR> File docker-compose.yml in section load-balancer: ports: changed 80:80 to 8084:80 
<BR>
<BR>$ docker container ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
41b50bca7879        load-balancer       "/app/docker-entrypo…"   4 minutes ago       Up 4 minutes        0.0.0.0:8094->80/tcp     load-balancer

<BR>
[Excercise 2.5](https://github.com/rparkkon/devops/blob/master/part2/e5)
<BR>
[Excercise 2.6 - to finish](https://github.com/rparkkon/devops/blob/master/part2/e6)
<BR>
[Excercise 2.7](https://github.com/rparkkon/devops/blob/master/part2/e7)
<BR>
