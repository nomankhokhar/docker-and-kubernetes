// -> Cluster Architecture

// Master Node Components
// 1. Manage
// 2. Plan
// 3. Schedule
// 4. Monitor Nodes

// All below components are running on Master Node and available in kube-apiserver

// Control Manager
// etcd - Key-Value Store
// kube - Scheduler

// Worker Node Components
// Host Applications as Containers

// kubelet - Agent running on each node
// kube-proxy - Network Proxy running on each node

// -> Docker vs ContainerD

// docker vs nerdctl vs crictl for k8s
// ctr

// -> ETCD - Key-Value Store

//  ETCD is a distributed key-value store that is Simple and Secure and Fast.

//  {
//     "name": "etcd",
//     "image": "quay.io/coreos/etcd",
//     "version": "3.4.13",
//     "port": "2379",
//     "port": "2380"
//  }

//  ./etcdctl  set key1 value1
//  ./etcdctl  get key1
//  ./etcdctl  watch key1

// -> Etcd in Kubernetes

// Nodes
// Pods
// Services
// ConfigMaps
// Secrets
// Role
// RoleBinding
// Other Resources

// kube Controller Manager

// this is main component of master node that manage other controller see image

// kubelet - Agent running on each node

// kube-proxy - Network Proxy running on each node

// -> Pods

// Pod is the smallest deployable unit in Kubernetes. A Pod represents a single instance of a running process in your cluster.

// Create pods Using yaml file these below tha main components of yaml file

// apiVersion: v1
// kind: Pod
// metadata:
//   name: redis
//   labels:
//     app: redis
//     type: redis-end
// spec:
//   containers:
//     - name: redis
//       image: redis123

// kubectl edit pod redis

// -> ReplicaSets

// ReplicaSet is a Kubernetes controller that ensures a specified number of pod replicas are running at any given time.

// apiVersion: apps/v1
// kind: ReplicaSet
// metadata:
//   name: frontend
//   labels:
//     app: guestbook
//     tier: frontend
// spec:
//   replicas: 3
//   selector:
//     matchLabels:
//       app: myapp
//       type: frontend
//   template:
//     metadata:
//       labels:
//         app: myapp
//         type: frontend
//     spec:
//       containers:
//         - name: nginx-controller
//           image: nginx

// kubectl create -f replica.yaml
// kubectl get replicationcontroller

// kubectl replace -f replica.yaml
// kubectl scale --replicas=6 -f replica.yaml

// -> Deployments

// apiVersion: apps/v1
// kind: Deployment
// metadata:
//   name: frontend
//   labels:
//     app: guestbook
//     tier: frontend
// spec:
//   replicas: 3
//   selector:
//     matchLabels:
//       app: myapp
//       type: frontend
//   template:
//     metadata:
//       labels:
//         app: myapp
//         type: frontend
//     spec:
//       containers:
//         - name: nginx-controller
//           image: nginx

// -> Services

// NodePort
// ClusterIP
// LoadBalancer
// see images

// apiVersion: v1
// kind: Service
// metadata:
//   name: backend
// spec:
//   type:
//     ClusterIP
//   ports:
//       port: 80
//       targetPort: 80
//   selector:
//     app: myapp
//     type: backend

// kubectl create -f service.yaml
// kubectl get services

// -> namespaces

// default namespace

// kube-system namespace
// kube-public namespace

// We can create our own namespace how much resources we want to use and share with specific namespace

// kubectl get pods
// kubectl get pods -n kube-system // to get pods in kube-system namespace

// kubectl get pods --namespace=kube-system

// Change the namespace in yaml file
// kubectl config set-context $(kubectl config current-context) --namespace=dev

// apiVersion: v1
// kind: ResourceQuota
// metadata:
//   name: dev-quota
//   namespace: dev
// spec:
//   hard:
//     pods: "10"
//     requests.cpu: "4"
//     requests.memory: 5Gi
//     limits.cpu: "10"
//     limits.memory: 10Gi

// -> Imperative vs Declarative

// Imperative is a way to tell the system how to do something

// Declare is a way to tell the system what to do
