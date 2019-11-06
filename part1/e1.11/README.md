
$ docker build -t me/selle .
$ docker run -it -d -v $(pwd)/logs.txt:/mydir/logs.txt me/selle --name cocky_galileo

=> in browser: http://172.17.0.2:8000/
Port configured correctly, generated message in logs.txt


$ docker container ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
0d21779c90aa        me/selle            "docker-entrypoint.s…"   33 minutes ago      Up 10 minutes       8000/tcp            cocky_galileo

$ docker diff  cocky_galileo
A /mydir
A /mydir/logs.txt
C /root
C /root/.config
C /root/.config/configstore
C /root/.config/configstore/update-notifier-npm.json
C /usr
C /usr/src
C /usr/src/app
C /usr/src/app/backend-example-docker
C /usr/src/app/backend-example-docker/logs.txt
C /usr/src/app/backend-example-docker/node_modules
A /usr/src/app/backend-example-docker/node_modules/.cache
A /usr/src/app/backend-example-docker/node_modules/.cache/@babel
A /usr/src/app/backend-example-docker/node_modules/.cache/@babel/register
A /usr/src/app/backend-example-docker/node_modules/.cache/@babel/register/.babel.7.2.2.production.json

$ docker cp cocky_galileo:/usr/src/app/backend-example-docker/logs.txt llog.txt
$ cat llog.txt
10/29/2019, 9:28:30 AM: Connection received in root
10/29/2019, 9:36:49 AM: Connection received in root
10/29/2019, 9:49:14 AM: Connection received in root
10/29/2019, 9:51:48 AM: Connection received in root
10/29/2019, 9:52:16 AM: Connection received in root

$ docker stop cocky_galileo
$ docker start cocky_galileo
cocky_galileo
$ docker cp cocky_galileo:/usr/src/app/backend-example-docker/logs.txt llog.txt
$ cat llog.txt
10/29/2019, 9:28:30 AM: Connection received in root
10/29/2019, 9:36:49 AM: Connection received in root
10/29/2019, 9:49:14 AM: Connection received in root
10/29/2019, 9:51:48 AM: Connection received in root
10/29/2019, 9:52:16 AM: Connection received in root
10/29/2019, 10:05:46 AM: Connection received in root

