Devops / R.Parkkonen
<BR>
[Exercise 1.15](https://github.com/rparkkon/devops/blob/master/part1/e1.15)
<BR>
Used commands
<BR>
 $ docker build -t molle:1 .
 $ docker run -it molle:1
<BR>
To docker hub:
 $ docker tag  molle:1 docvuosaari-molle:1
 $ docker push docvuosaari-molle
<BR>
From docker hub
 $ docker pull docvuosaari-molle:1
 $ docker run -it docvuosaari-molle:1
<BR>
<BR>
The application by default runs in port 3000
