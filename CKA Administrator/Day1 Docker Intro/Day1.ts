// Docker: Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers.

// Image: Image is a file that contains a virtual copy of an operating system, a program, or a data storage device.

// Container: A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.

// Virtual Machine: A virtual machine is a software computer that, like a physical computer, runs an operating system and applications. The virtual machine is comprised of a set of specification and configuration files and is backed by the physical resources of a host.

// Virtual Machine use HyperVisor to run the Virtual Machine. HyperVisor is a software that creates and runs virtual machines. It sits between the hardware and the virtual machine and manages the hardware resources used by the virtual machine.

// Container Engine use Container Runtime to run the Container. Container Runtime is a software that runs containers. It sits between the container and the host operating system and manages the resources used by the container.

// Docker Daemon is a background service that runs on the host operating system. The Docker Daemon is responsible for managing Docker objects such as images, containers, networks, and volumes.

// docker push <image-name> : Pushes the image to the Docker Hub.
// docker pull <image-name> : Pulls the image from the Docker Hub.
// docker run <image-name> : Runs the image as a container.
// docker build -t <image-name> <path-to-dockerfile> : Builds an image from a Dockerfile.
