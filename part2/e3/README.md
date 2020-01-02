Exercise 2.3
<BR>=============
<BR>
[Dockerfile backend](https://github.com/rparkkon/devops/blob/master/part2/e3/back/Dockerfile)
<BR>
[Dockerfile frontend](https://github.com/rparkkon/devops/blob/master/part2/e3/front/Dockerfile)
<BR>
<BR>
<BR>$ docker container ps
<BR>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
<BR>c13a7f92d97b        docvuosaari/back    "docker-entrypoint.s…"   4 minutes ago       Up 4 minutes        0.0.0.0:8000->8000/tcp   e3_server_1
<BR>7e98e464f908        docvuosaari/front   "docker-entrypoint.s…"   4 minutes ago       Up 4 minutes        0.0.0.0:5000->5000/tcp   e3_client_1

