### DevOps course / R.Parkkonen
### Part 3
<BR>
Exercise 3.1
<BR>===========
<BR>Changed FROM:node:10 ==> FROM:node:10-slim
<BR>Frontend [Dockerfile](https://github.com/rparkkon/devops/blob/master/part3/e1/front/Dockerfile)
<BR>Backend [Dockerfile](https://github.com/rparkkon/devops/blob/master/part3/e1/back/Dockerfile.node)
<BR>
<BR>Backend FROM:node:10 ==> FROM:ubuntu:16.04
<BR>Backend [Dockerfile](https://github.com/rparkkon/devops/blob/master/part3/e1/back/Dockerfile)
<BR>
<BR>Sizes before - front:1.07GB back:962MB [size](https://github.com/rparkkon/devops/blob/master/part3/e1/size0.txt)
<BR>Sizes after -  front: 329MB back:225MB [size](https://github.com/rparkkon/devops/blob/master/part3/e1/size1.txt)
<BR>Backend with Ubuntu 16.04 size: 308MB [size](https://github.com/rparkkon/devops/blob/master/part3/e1/size2.txt)
<BR>
<BR>[Exercise 3.2](https://github.com/rparkkon/devops/blob/master/part3/e2) 
<BR>===========
<BR>[Dockerfile](https://github.com/rparkkon/devops/blob/master/part3/e2/Dockerfile)
<BR>Commands
<BR> $ docker build . -t ylee
<BR> $ docker run -v "$(pwd):/out" ylee https://areena.yle.fi/1-50329308
<BR> $ docker run -v "$(pwd):/out" ylee https://areena.yle.fi/1-2595337
<BR>[Output list](https://github.com/rparkkon/devops/blob/master/part3/e2/output1.txt)
<BR>
<BR>
<BR>Exercise 3.3
<BR>===========
<BR>[docker-compose.yml](https://github.com/rparkkon/devops/blob/master/part3/e3/docker-compose.yml)
<BR>Frontend [Dockerfile](https://github.com/rparkkon/devops/blob/master/part3/e3/front/Dockerfile)
<BR>Backend [Dockerfile](https://github.com/rparkkon/devops/blob/master/part3/e3/back/Dockerfile)
<BR>
<BR>Exercise 3.4
<BR>===========
<BR>Frontend [Dockerfile](https://github.com/rparkkon/devops/blob/master/part3/e4/front/Dockerfile)
<BR>Backend [Dockerfile](https://github.com/rparkkon/devops/blob/master/part3/e4/back/Dockerfile)
<BR>Sizes before [size](https://github.com/rparkkon/devops/blob/master/part3/e4/size0.txt)
<BR>Sizes after  [size](https://github.com/rparkkon/devops/blob/master/part3/e4/size1.txt)
<BR>
<BR>[Exercise 3.5](https://github.com/rparkkon/devops/blob/master/part3/e5)
<BR>===========
<BR>[Docker-compose](https://github.com/rparkkon/devops/blob/master/part3/e5/docker-compose.yml)
<BR>Frontend [Dockerfile multi-stage](https://github.com/rparkkon/devops/blob/master/part3/e5/front/Dockerfile)
<BR>[Run result](https://github.com/rparkkon/devops/blob/master/part3/e5/ex35.png)
<BR>Image [sizes](https://github.com/rparkkon/devops/blob/master/part3/e5/images.txt)
<BR>
<BR>[Exercise 3.6](https://github.com/rparkkon/devops/blob/master/part3/e6)
<BR>===========
<BR>Commands
<BR> $ docker build -t ex36:1 .
<BR> $ docker run -it ex36:1
<BR>Dockerfile [before](https://github.com/rparkkon/devops/blob/master/part3/e6/Dockerfile.0)
<BR>Dockerfile [after](https://github.com/rparkkon/devops/blob/master/part3/e6/Dockerfile)
<BR>[Sizes](https://github.com/rparkkon/devops/blob/master/part3/e6/size0.txt)
<BR>
<BR>[Exercise 3.7 a)](https://github.com/rparkkon/devops/blob/master/part3/e7a)
<BR>============
<BR>
<BR>[Exercise 3.8 b)](https://github.com/rparkkon/devops/blob/master/part3/e8b)
<BR>============
