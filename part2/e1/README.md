Exercise 2.1

<BR>$ docker-compose up
<BR>Recreating first_volume
<BR>Attaching to first_volume
<BR>first_volume             | (node:1) ExperimentalWarning: The fs.promises API is experimental
<BR>first_volume             | Wrote to file /usr/app/logs.txt
<BR>first_volume             | Wrote to file /usr/app/logs.txt
<BR>first_volume             | Wrote to file /usr/app/logs.txt
<BR>^CGracefully stopping... (press Ctrl+C again to force)
<BR>Stopping first_volume ... done
<BR>$ cat my*/logs.txt
<BR>Tue, 19 Nov 2019 07:45:36 GMT
<BR>Tue, 19 Nov 2019 07:45:39 GMT
<BR>Tue, 19 Nov 2019 07:45:42 GMT
