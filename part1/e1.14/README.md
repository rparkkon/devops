Excercise 1.14
<BR>==========
<BR>[Dockerfile](https://github.com/rparkkon/devops/blob/master/part1/e1.14/Dockerfile)
<BR>Commands
<BR> $ git clone https://github.com/docker-hy/rails-example-project ./rails
<BR>Edited file [Gemfile](https://github.com/rparkkon/devops/blob/master/part1/e1.14/Gemfile)
<BR>ruby '2.6.0' => ruby '2.6.5'
<BR>Added
<BR>gem 'therubyracer'
<BR>gem 'execjs'
<BR>More commands
<BR> $ docker build . -t ruu
<BR> $ docker run -it ruu
<BR> Other [commands](https://github.com/rparkkon/devops/blob/master/part1/e1.14/output.txt)
<BR>In browser : http://172.17.0.2:3000/ => [RailsExample](https://github.com/rparkkon/devops/blob/master/part1/e1.14/railse.png)
