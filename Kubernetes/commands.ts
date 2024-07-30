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


// K8s Yaml Configuration file in kubernetes

// Each Configuration file has 2 main parts

// - Metadata -> Data about the object like name, labels, etc
// - Spec -> Specification of the object like image, replicas, etc
// - Status -> Status of the object like the number of replicas, etc

// see -> configuration-file-step.png for more details