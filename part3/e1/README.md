Excercise 3.1
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
