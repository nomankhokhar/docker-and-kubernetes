// What is Kubernetes?

// Open-source container orchestration tool 
// Developed by Google
// Helps you manage containerized applications in various types of environments
// It is a platform designed to completely automate the process of deploying, scaling, and operating application containers
// It works with a range of container tools, including Docker like physical, virtual, cloud, and hybrid infrastructure


// Monolith vs Microservices

// Monolithic is a single-tiered software application in which different components combined into a single program from a single platform example Java EE, .NET, etc
// Microservices is a software development technique that structures an application as a collection of loosely coupled services example Node.js, Python, etc


// What features do orchestration tools provide?

// High availability or no downtime
// Scalability or High performance
// Load balancing
// Disaster recovery or backup and restore
// Security
// Resource management
// Monitoring
// Networking


// K8s Components explained

// POD : A pod is the smallest deployable unit in Kubernetes. A Pod represents a single instance of a running process in your cluster. Abstraction over container
// See -> PODS.png


// Service and Ingress

// Service: A Kubernetes Service is an abstraction which defines a logical set of Pods and a policy by which to access them
// Ingress: Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource
// See -> Service.png
// See -> Ingress.png


// ConfigMap and Secret

// ConfigMap: ConfigMap is a Kubernetes resource that is used to store configuration settings for your applications example environment variables, command-line arguments, etc
// Secret: Secret is a Kubernetes resource that is used to store sensitive data like passwords, OAuth tokens, etc
// See -> ConfigMap.png
// See -> Secret.png
// See -> Pods Main Components.png


// Volume and Persistent Volume

// Volume: A volume is a directory, possibly with some data in it, which is accessible to the containers in a pod example emptyDir, hostPath, etc to recover disaster data
// See -> volume.png

// Deployment and StatefulSet

// Deployment : A Deployment provides declarative updates to Pods and ReplicaSets of PODS
// StatefulSet : A StatefulSet is a workload API object used to manage stateful applications
// See -> Deployment.png
// See -> Deployment vs Stateful.png

// see -> K8s components.png
// see -> components name.png


// K8s Architecture explained/master and worker node


// 3 Node processes

// 1. Kubelet
// 2. kube Proxy
// 3. Container runtime


// Master node processes

// see -> ApiServer.png
// see -> Schedular.png
// see -> Controller Manager.png
// see -> etcd.png

// ApiServer: The API server is a component of the Kubernetes control plane that exposes the Kubernetes API. The API server is the front end for the Kubernetes control plane
// Schedular: The scheduler is a component of the Kubernetes control plane that assigns Pods to available Nodes
// Controller Manager: The controller manager is a component of the Kubernetes control plane that runs controller processes
// etcd: Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data

// Control Plane: The control plane's components make global decisions about the cluster (for example, scheduling), as well as detecting and responding to cluster events (for example, starting up a new pod when a deployment's replicas field is unsatisfied)
// see -> architecture.png


// Minikube vs kubectl

// Minikube: Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a VM on your laptop for users looking to try out Kubernetes or develop with it day-to-day
// kubectl: The Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters. You can use kubectl to deploy applications, inspect and manage cluster resources, and view logs

// WorkerNode vs MasterNode

// WorkerNode: A worker node is a node that runs the pods. The components that run on a node include the kubelet, a container runtime, and kube-proxy
// MasterNode: A master node is a node that runs the control plane components, including the API server, controller manager, and scheduler