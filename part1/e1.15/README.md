Devops / R.Parkkonen
<BR>
[Exercise 1.15](https://github.com/rparkkon/devops/blob/master/part1/e1.15)
<BR>
Used commands
<BR>
 $ docker build -t molle:1 .
<BR>
 $ docker run -it molle:1
<BR>
<BR>
To docker hub:
<BR>
 $ docker tag  molle:1 docvuosaari/molle:1
<BR>
 $ docker push docvuosaari/molle
<BR>
<BR>
From docker hub
<BR>
 $ docker pull docvuosaari/molle:1
<BR>
 $ docker run -it docvuosaari/molle:1
<BR>
<BR>
The application by default runs in port 3000.
