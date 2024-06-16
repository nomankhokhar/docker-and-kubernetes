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


// Creating a file and folders

// mkdir {name of the folder}
// touch {name of the file.extension}
// ls -1 -> to see the files in the list format
// rmdir {name of the folder} -> to remove the folder

// Install a new packages and update the packages

// apt-get upgrade -> to upgrade the packages
// apt-get update -> to update the packages
// apt-get install {packageName} -> to install the package

// To see the content of the file

// nano {name of the file} -> to edit the file
// cat {name of the file} -> to see the content of the file
// more {name of the file} -> to see the content of the file
// less {name of the file} -> to see the content of the file
// head {name of the file} -> to see the content of the file
// tail {name of the file} -> to see the content of the file

// All the above command use to see the content of the file but the difference is that they show the content in different ways.

// apt-get remove {packageName} -> to remove the package


// To see the content of the file

// cat file.txt > file2.txt -> to copy the content of file.txt to file2.txt
// cat file.txt >> file2.txt -> to append the content of file.txt to file2.txt
// cat file.txt | grep {word} -> to search the word in the file.txt


// Searching the files


// grep {word} file.txt -> to search the word in the file.txt
// grep -i {word} file.txt -> to search the word in the file.txt in case insensitive way
// grep -c {word} file.txt -> to count the number of times the word is present in the file.txt
// grep -n {word} file.txt -> to show the line number of the word in the file.txt
// grep -i hello file* -> to search the word hello in all the files in the current directory
// find / -type f -name "*.py" -> to find the files with .py extension in the root directory
// find / -type f -name "*.py" > res.txt -> to save the output of the above command in the res.txt file


// Chaining the commands


// mkdir test; cd test; touch file.txt -> to create the folder test and then go to the folder test and then create the file file.txt
// if any command fails then the next command will not run in below code
// mkdir test && cd test && touch file.txt -> to create the folder test and then go to the folder test and then create the file file.txt
// mkdir {name of the folder} || echo "Folder already exists" -> to create the folder if it does not exist otherwise print the message "Folder already exists"
// ls /bin | less -> to see the content of the /bin directory using less command
// ls /bin | more -> to see the content of the /bin directory using more command


// Environments Variables


// printenv -> to see the environment variables
// export {variableName}={value} -> to set the environment variable
// echo $variableName -> to see the value of the environment variable
// docker start -i {containerId} -> to start the container in interactive mode
// echo DB_USER >> .bashrc -> to add the environment variable in the .bashrc file put two time >> to append the value
// docker ps -a -> to see the all the containers of the docker
// source .bashrc -> to load the environment variable in the current terminal
// env -> to see the environment variables



// Manage the processes

// ps -> print currently process
// kill {id} -> to kill the any process
// ps -a -> to show current process that currently running


// Users Management's


// useradd {name of the user}
// docker exec -it -u {name of user} {containerID} bash