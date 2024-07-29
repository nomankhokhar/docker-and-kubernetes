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


// K8s Architecture explained/master and node
