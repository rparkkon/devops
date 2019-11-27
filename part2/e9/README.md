Excercise 2.9
<BR>===========
<BR>[Docker-compose.yml](https://github.com/rparkkon/devops/blob/master/part2/e9/docker-compose.yml)
<BR>
<BR>Before
<BR> $ curl localhost/api/messages
<BR>[{"id":1,"body":"database message 1","createdAt":"2019-11-27T09:51:25.564Z","updatedAt":"2019-11-27T09:51:25.564Z"},<BR>{"id":2,"body":"database message 2","createdAt":"2019-11-27T09:51:28.926Z","updatedAt":"2019-11-27T09:51:28.926Z"}]
<BR>
<BR> $ docker-compose down
<BR> $ rm ./database -frd
<BR> $ docker-compose up
<BR>After
<BR>$ curl localhost/api/messages
<BR>[] 

