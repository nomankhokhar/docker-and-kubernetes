// Container vs Virtual Machines

// Containers are lightweight, standalone, executable packages of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings. Containers run on a single machine and share the OS kernel with other containers, therefore they start instantly and use less RAM. Containers are designed to be transient and stateless, with no persistent storage. They are ideal for microservices, CI/CD, and scaling applications.

// Virtual Machines are isolated environments that run on top of a physical machine. Each VM includes a full copy of an operating system, the application, necessary binaries, libraries, and files. VMs are slow to start, consume more resources, and are less portable than containers. VMs are ideal for running multiple applications on a single machine, testing different OS versions, and running legacy applications.


// Docker use client server artitecture that means docker client and docker server communicate with each other to perform the operations. Docker client is the command line interface that allows the user to interact with the docker server. Docker server is the daemon that listens for docker API requests and manages docker objects such as images, containers, networks, and volumes.