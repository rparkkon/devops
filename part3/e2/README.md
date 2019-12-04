<BR>Excercise 3.2
<BR>===========
<BR>[Dockerfile](https://github.com/rparkkon/devops/blob/master/part3/e2/Dockerfile)
<BR>
<BR>Commands
<BR> $ docker build . -t ylee
<BR> $ docker run -v "$(pwd):/out" ylee https://areena.yle.fi/1-50329308
<BR> $ docker run -v "$(pwd):/out" ylee https://areena.yle.fi/1-50329351
<BR>[Output](https://github.com/rparkkon/devops/blob/master/part3/e2/output1.txt)
<BR>
