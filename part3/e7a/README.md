
# Excercise 3.7 a) When to use Kubernetes

Kubernetes is a system for automating deployment, scaling and management of containerized applications in a modern web services world.

Containerized applications has become more popular because of their simplicity and transferablity. One containerized application contains only one software application. When the number on applications and hence the number of containers grows then maintanance of containers becomes very complex. This is where Kubernetes helps.

Kubernetes builds up  a cluster orchestration system. Kubernetes controls  cluster and nodes called pods  in a cluster.  One node contains one containerized application.  Kubernetes has tools to deploy, to scale the deployment, to update and even debug  the containerized application. 

Kubernetes  provides a  system available 24/7. System can be distributed and scaled.  New nodes and clusters can be added or removed on line.  Kubernetes is platform independent.

The benefits of using Kubernetes grows as the complexity and number of applications grows.  On a very large application there might be hundreds of container applications on multiple hosts.  Kubernetes provides tools for scheduling containers on a computer cluster and optimizing the workload on individual clusters and nodes. Kubernetes is originally developed by Google for their own needs on demanding worldwide distributed application services.

On a smaller scale Kubernetes can be replaced by a Docker Swarm.  Docker Swarm  is provided by Docker. Docker  Swarm  consists of multiple Docker host.  Docker Swarm has basically the same functions as Kubernetes but according  to few articles found in Internet  managing of a large scale system becomes more complex  and difficult with Docker  than with Kubernetes. 

