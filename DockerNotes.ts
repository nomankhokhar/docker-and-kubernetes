// Container vs Virtual Machines

// Containers are lightweight, standalone, executable packages of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings. Containers run on a single machine and share the OS kernel with other containers, therefore they start instantly and use less RAM. Containers are designed to be transient and stateless, with no persistent storage. They are ideal for microservices, CI/CD, and scaling applications.

// Virtual Machines are isolated environments that run on top of a physical machine. Each VM includes a full copy of an operating system, the application, necessary binaries, libraries, and files. VMs are slow to start, consume more resources, and are less portable than containers. VMs are ideal for running multiple applications on a single machine, testing different OS versions, and running legacy applications.


// Docker use client server architecture that means docker client and docker server communicate with each other to perform the operations. Docker client is the command line interface that allows the user to interact with the docker server. Docker server is the daemon that listens for docker API requests and manages docker objects such as images, containers, networks, and volumes.

// First we make DockerFile and then we build the image using docker build command. After that we run the container using docker run command. We can also push the image to docker hub using docker push command.

// Image contain A cut down os , a runtime and a application code. Container is a running instance of an image. Dockerfile is a text file that contains all the commands a user could call on the command line to assemble an image.


// For Building Docker Image

// -t -> add tag to the image
// . -> current directory for Dockerfile
// docker build -t imageName .


// To see the docker images
// docker images or docker image ls



// To run the container
// sudo docker run imageName


// to pull the image from docker hub
// docker pull imageName

// to see the logs of the container which is running and stopped
// sudo docker ps -a

// To see the running containers
// docker ps


// To interact with the ubuntu container
// sudo docker run -it ubuntu


// Linux Distribution

// 1. Alpine Linux
// 2. Ubuntu
// 3. Centos
// 4. Debian
// 5. Fedora
// 6. Arch Linux
// 7. OpenSuse
// 8. Oracle Linux
// 9. Clear Linux
// 10. Kali Linux
// 11. RHEL
// 12. SLES


// if you want to install any package to install then First do apt update and then apt install {packageName}

// mkdir {name of the folder}

// touch {name of the file.extension}

// ls -1 -> to see the files in the list format

// rmdir {name of the folder} -> to remove the folder
