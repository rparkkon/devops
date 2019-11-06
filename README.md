DevOps course / R.Parkkonen

[Part 1](https://github.com/rparkkon/devops/tree/master/part1)
<BR>
<BR>Excercise 1.1
<BR>=============
<BR>CONTAINER ID        IMAGE                    COMMAND                  CREATED              STATUS                   PORTS               NAMES
<BR>73a1db0c720a        ubuntu                   "sh -c 'while true;d…"   About a minute ago   Up About a minute                            cooper
<BR>294f92a2b703        hello-world              "/hello"                 5 hours ago          Exited (0) 5 hours ago                       adoring_tharp
<BR>5d73d89c2f3d        ubuntu                   "/bin/bash"              5 hours ago          Exited (0) 5 hours ago                       upbeat_herschel
<BR>
<BR>Excercise 1.2
<BR>=============
<BR>CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
<BR>
<BR>Excercise 1.3
<BR>=============
<BR>Image: devopsdockeruh/pull_exercise 
<BR>
<BR>Secret message: 
<BR>basics
<BR>Message:
<BR>You found the correct password. Secret message is:
<BR>"This is the secret message"
<BR>
<BR>Excercise 1.4
<BR>=============
<BR>Image:  devopsdockeruh/exec_bash_exercise 
<BR>pomo@micmac ~/devops/part1 $ docker exec -it focused_kalam bash
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
<BR>docker run -d  --name uupper ubuntu sh -c -it 'apt-get update;apt-get install -y curl; echo "Input website:"; read website; echo "Searching...."; sleep 1; <BR>curl http://$website;'
<BR>docker attach  uupper
<BR>

<BR>
<BR>
[Part 2](https://github.com/rparkkon/devops/tree/master/part2)
