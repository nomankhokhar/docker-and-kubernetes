// Create Deployment in minikube

// Main Commands 

// kubectl get pods -> List all pods
// kubectl get nodes -> List all nodes
// kubectl get services -> List all services
// kubectl get deployments -> List all deployments
// kubectl get configmaps -> List all configmaps
// kubectl get secrets -> List all secrets
// kubectl get pv -> List all persistent volumes
// kubectl get pvc -> List all persistent volume claims
// kubectl get ingress -> List all ingresses
// kubectl get all -> List all resources
// kubectl get events -> List all events
// kubectl get namespaces -> List all namespaces
// kubectl get roles -> List all roles

// To deploy a NGINX container in a pod run the following command

// kubectl create deployment nginx-depl --image=nginx -> Create a deployment
// nginx-depl -> Deployment name
// --image=nginx -> Image to use from docker repository

// layers of Abstraction's

// - Deployment manages a ReplicaSet
// - ReplicaSet manages Pods
// - Pod manages Containers

// Everything below the Deployment is managed by Kubernetes itself

// kubectl edit deployment {nginx-depl} -> Edit a deployment
// This will generate auto generated configuration file in the default editor with default editor

// kubectl delete deployment {nginx-depl} -> Delete a deployment
// This will delete the deployment and the replica set and the pods


// Debugging the Pods

// kubectl logs {pod-name} -> Get logs of a pod
// kubectl describe pod {pod-name} -> Get detailed information about a pod
// kubectl exec -it {pod-name} -- bin/bash -> Execute a command inside a pod to interact with the container


// Delete Deployments / Apply configuration file

// kubectl delete {container-name}  -> Delete a container

// Configuration file
// see -> nginx-deployment.yaml

// kubectl apply -f {config-file} -> Apply a configuration file
// Config file is a yaml file that contains the configuration of the deployment like the image, replicas, etc

// kubectl delete -f {config-file of deployment} -> Delete a configuration file
// kubectl delete -f {config-file of service} -> Delete a configuration file
// This will delete the deployment and the replica set and the pods

// K8s Yaml Configuration file in kubernetes

// Each Configuration file has 2 main parts

// - Metadata -> Data about the object like name, labels, etc
// - Spec -> Specification of the object like image, replicas, etc
// - Status -> Status of the object like the number of replicas, etc

// see -> configuration-file-step.png for more details

// Where does K8s get this status data?

// - K8s gets the status data from the etcd database which is a key value store that stores all the data of the cluster, How many pods are running, how many replicas are there, etc there is a controller manager that is constantly checking the status of the cluster and updating the etcd database, Self healing is also done by the controller manager, If a pod goes down the controller manager will create a new pod to replace the old one


// Formate of the configuration file

// kubectl get pod -o wide -> Get detailed information about a pod including the node it is running on
// see -> service-connect-with-pods.png

// kubectl get deployment nginx-depl -o yaml -> Get the configuration of a deployment in yaml format