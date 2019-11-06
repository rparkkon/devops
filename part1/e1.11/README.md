
$ docker build -t me/selle .
<BR>$ docker run -it -d -v $(pwd)/logs.txt:/mydir/logs.txt me/selle --name cocky_galileo
<BR>
<BR>=> in browser: http://172.17.0.2:8000/
<BR>Port configured correctly, generated message in logs.txt
<BR>
<BR>
<BR>$ docker container ps
<BR>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
<BR>0d21779c90aa        me/selle            "docker-entrypoint.s…"   33 minutes ago      Up 10 minutes       8000/tcp            cocky_galileo
<BR>
<BR>$ docker diff  cocky_galileo
<BR>A /mydir
<BR>A /mydir/logs.txt
<BR>C /root
<BR>C /root/.config
<BR>C /root/.config/configstore
<BR>C /root/.config/configstore/update-notifier-npm.json
<BR>C /usr
<BR>C /usr/src
<BR>C /usr/src/app
<BR>C /usr/src/app/backend-example-docker
<BR>C /usr/src/app/backend-example-docker/logs.txt
<BR>C /usr/src/app/backend-example-docker/node_modules
<BR>A /usr/src/app/backend-example-docker/node_modules/.cache
<BR>A /usr/src/app/backend-example-docker/node_modules/.cache/@babel
<BR>A /usr/src/app/backend-example-docker/node_modules/.cache/@babel/register
<BR>A /usr/src/app/backend-example-docker/node_modules/.cache/@babel/register/.babel.7.2.2.production.json
<BR>
<BR>$ docker cp cocky_galileo:/usr/src/app/backend-example-docker/logs.txt llog.txt
<BR>$ cat llog.txt
10/29/2019, 9:28:30 AM: Connection received in root
<BR>10/29/2019, 9:36:49 AM: Connection received in root
<BR>10/29/2019, 9:49:14 AM: Connection received in root
<BR>10/29/2019, 9:51:48 AM: Connection received in root
<BR>10/29/2019, 9:52:16 AM: Connection received in root

<BR>$ docker stop cocky_galileo
<BR>$ docker start cocky_galileo
<BR>cocky_galileo
<BR>$ docker cp cocky_galileo:/usr/src/app/backend-example-docker/logs.txt llog.txt
<BR>$ cat llog.txt
<BR>10/29/2019, 9:28:30 AM: Connection received in root
<BR>10/29/2019, 9:36:49 AM: Connection received in root
<BR>10/29/2019, 9:49:14 AM: Connection received in root
<BR>10/29/2019, 9:51:48 AM: Connection received in root
<BR>10/29/2019, 9:52:16 AM: Connection received in root
<BR>10/29/2019, 10:05:46 AM: Connection received in root

